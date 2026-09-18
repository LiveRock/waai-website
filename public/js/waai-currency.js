/**
 * waai geo-currency switcher (SG→SGD, MY→MYR, rest→USD) — shared by the
 * pricing and signup pages. Static site, so currency is applied at RUNTIME:
 *
 *   <span data-prices='{"sgd":"S$20","usd":"US$15.60","myr":"RM63"}'>S$20</span>
 *   <div data-currency-switcher></div>
 *
 * - Default: localStorage 'waai_currency' → else GET /api/public/geo on the
 *   app backend → else sgd (matches the SGD-rendered server HTML).
 * - The switcher persists a manual override; waaiChat's web app reads the same
 *   localStorage key (frontend/src/lib/currency.ts).
 * - Exposes window.__waaiCurrency (kept current) for page scripts (the signup
 *   form reads it at submit time).
 */
(function () {
  'use strict';

  var GEO_URL = 'https://waaichat.hsi.asia/api/public/geo';
  var STORAGE_KEY = 'waai_currency';
  var CURRENCIES = ['sgd', 'usd', 'myr'];
  var LABELS = { sgd: 'S$ SGD', usd: '$ USD', myr: 'RM MYR' };

  var currency = 'sgd';
  var overridden = false;

  function readStored() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return CURRENCIES.indexOf(v) !== -1 ? v : null;
    } catch (e) {
      return null;
    }
  }

  function store(v) {
    try {
      localStorage.setItem(STORAGE_KEY, v);
    } catch (e) {
      /* private mode — the override just won't persist */
    }
  }

  function applyPrices() {
    var nodes = document.querySelectorAll('[data-prices]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var map;
      try {
        map = JSON.parse(el.getAttribute('data-prices'));
      } catch (e) {
        continue;
      }
      if (map && map[currency]) el.textContent = map[currency];
    }
  }

  function renderSwitchers() {
    var mounts = document.querySelectorAll('[data-currency-switcher]');
    for (var i = 0; i < mounts.length; i++) {
      var mount = mounts[i];
      if (mount.childElementCount) {
        // already rendered — just refresh the active state
        var btns = mount.querySelectorAll('button[data-cur]');
        for (var j = 0; j < btns.length; j++) {
          btns[j].className = btns[j].getAttribute('data-cur') === currency ? activeCls() : idleCls();
        }
        continue;
      }
      for (var k = 0; k < CURRENCIES.length; k++) {
        (function (cur) {
          var b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('data-cur', cur);
          b.textContent = LABELS[cur];
          b.className = cur === currency ? activeCls() : idleCls();
          b.addEventListener('click', function () {
            currency = cur;
            overridden = true;
            store(cur);
            applyPrices();
            renderSwitchers();
          });
          mount.appendChild(b);
        })(CURRENCIES[k]);
      }
    }
  }

  function activeCls() {
    return 'px-2 py-0.5 rounded-md font-semibold bg-wa-green text-white';
  }
  function idleCls() {
    return 'px-2 py-0.5 rounded-md font-medium text-gray-500 hover:text-gray-800';
  }

  function init(cur) {
    currency = cur;
    window.__waaiCurrency = currency;
    applyPrices();
    renderSwitchers();
  }

  var stored = readStored();
  if (stored) {
    overridden = true;
    init(stored);
  } else {
    init('sgd'); // server HTML default — swap after detection
    fetch(GEO_URL, { headers: { Accept: 'application/json' } })
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (data) {
        if (overridden || !data || !data.currency) return;
        var c = String(data.currency).toLowerCase();
        if (CURRENCIES.indexOf(c) !== -1 && c !== currency) init(c);
      })
      .catch(function () {
        /* geo unavailable — keep the SGD default */
      });
  }
})();
