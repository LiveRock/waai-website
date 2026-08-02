import type { LocaleContent } from './types';

const it: LocaleContent = {
  features: {
    'auto-responder': {
      title: 'Risposta Automatica WhatsApp',
      shortTitle: 'Risposta Automatica',
      headline: 'Non Lasciare Più un Cliente in Attesa',
      description:
        'Risposte istantanee basate sull\'AI per ogni messaggio WhatsApp. La corrispondenza basata su regole gestisce le domande comuni in millisecondi, con un intelligente fallback LLM per tutto il resto.',
      metaDescription: 'Rispondi automaticamente a ogni messaggio WhatsApp con la precisione potenziata dall\'AI. Corrispondenza basata su regole più intelligente fallback LLM.',
      benefits: [
        { title: 'Risposte Sotto il Secondo', description: 'La corrispondenza fuzzy trova la risposta giusta prima che il cliente finisca di digitare il messaggio successivo.' },
        { title: 'Fallback Intelligente', description: 'Quando nessuna regola corrisponde, la tua AI interviene con una risposta contestuale e utile — non un generico "non capisco".' },
        { title: 'Disponibilità 24/7', description: 'Il tuo agente AI non dorme mai, non prende mai un giorno di ferie e non è mai di cattivo umore.' },
      ],
      howItWorks: [
        { title: 'Configura il Tuo Q&A', description: 'Aggiungi domande e risposte comuni — importale da CSV o digitale tu.' },
        { title: 'Configura la Tua AI', description: 'Scegli il tuo provider AI e personalizza il prompt di sistema per adattarlo al tono del tuo brand.' },
        { title: 'Vai Online', description: 'Ogni messaggio WhatsApp in arrivo riceve una risposta istantanea e accurata in automatico.' },
      ],
      useCases: [
        { title: 'Automazione FAQ', description: 'Gestisci "Quali sono i vostri orari?" e "Dove siete ubicati?" senza sforzo.' },
        { title: 'Richieste di Prodotto', description: 'Rispondi automaticamente a domande su prezzi, disponibilità e specifiche in modo istantaneo.' },
        { title: 'Assistenza Fuori Orario', description: 'Continua a servire i clienti quando il tuo team è offline.' },
      ],
    },
    'knowledge-base': {
      title: 'Base di Conoscenza',
      shortTitle: 'Base di Conoscenza',
      headline: 'La Tua Competenza Aziendale, Sempre Disponibile',
      description:
        'Costruisci una base di conoscenza Q&A completa da cui il tuo agente AI attinge. Importa centinaia di voci tramite CSV, organizzale per priorità e lascia che la corrispondenza fuzzy trovi la risposta perfetta ogni volta.',
      metaDescription: 'Costruisci una base di conoscenza Q&A intelligente con importazione CSV, corrispondenza fuzzy e controllo delle priorità. La tua competenza, sempre disponibile.',
      benefits: [
        { title: 'Importazione Massiva', description: 'Carica centinaia di coppie Q&A tramite CSV o JSON. La tua base di conoscenza cresce in pochi minuti, non settimane.' },
        { title: 'Corrispondenza Intelligente', description: 'La corrispondenza fuzzy gestisce errori di battitura, variazioni e corrispondenze parziali — i clienti non hanno bisogno di formulazioni esatte.' },
        { title: 'Sistema di Priorità', description: 'Controlla quali risposte hanno la precedenza quando si trovano più corrispondenze.' },
      ],
      howItWorks: [
        { title: 'Aggiungi la Tua Conoscenza', description: 'Digita singole coppie Q&A o importale in massa da un foglio di calcolo.' },
        { title: 'Organizza e Dai Priorità', description: 'Imposta categorie, priorità e frasi di attivazione per ogni voce.' },
        { title: 'Testa e Distribuisci', description: 'Usa la chat di prova integrata per verificare le risposte, poi vai online con sicurezza.' },
      ],
      useCases: [
        { title: 'Catalogo Prodotti', description: 'Permetti ai clienti di chiedere di qualsiasi prodotto e ottenere dettagli accurati all\'istante.' },
        { title: 'FAQ sulle Policy', description: 'Spedizioni, resi, garanzie — rispondi alle domande sulle policy senza intervento umano.' },
        { title: 'Guida all\'Onboarding', description: 'I nuovi clienti ottengono risposte immediate alle domande di configurazione e prime impostazioni.' },
      ],
    },
    'logic-flows': {
      title: 'Flussi Logici',
      shortTitle: 'Flussi Logici',
      headline: 'Crea Conversazioni che Convertono',
      description:
        'Crea flussi di conversazione a più passaggi con logica di diramazione, condizioni e azioni. Guida i clienti attraverso prenotazioni, qualifiche, ordini — tutto senza scrivere una sola riga di codice.',
      metaDescription: 'Crea conversazioni WhatsApp a più passaggi con logica di diramazione, condizioni e variabili. Nessun codice richiesto.',
      benefits: [
        { title: 'Costruttore di Flussi Visivo', description: 'Disegna conversazioni complesse con un editor intuitivo passo dopo passo. Nessuna programmazione richiesta.' },
        { title: 'Diramazione Intelligente', description: 'Instrada i clienti in modo diverso in base alle loro risposte, all\'ora del giorno o a qualsiasi variabile.' },
        { title: 'Sistema di Variabili', description: 'Cattura e riutilizza informazioni lungo la conversazione — nomi, scelte, calcoli.' },
      ],
      howItWorks: [
        { title: 'Disegna il Tuo Flusso', description: 'Aggiungi passaggi di messaggio, domanda e condizione per costruire la tua conversazione.' },
        { title: 'Imposta i Trigger', description: 'Definisci parole chiave o frasi che avviano il flusso automaticamente.' },
        { title: 'Testa e Attiva', description: 'Percorri il flusso in modalità test, poi distribuiscilo per gestire conversazioni reali.' },
      ],
      useCases: [
        { title: 'Qualificazione dei Lead', description: 'Poni domande di qualificazione e instrada automaticamente i lead caldi al tuo team vendite.' },
        { title: 'Prenotazione di Appuntamenti', description: 'Guida i clienti attraverso gli slot disponibili e conferma le prenotazioni tramite Google Calendar.' },
        { title: 'Elaborazione degli Ordini', description: 'Guida i clienti attraverso la selezione dei prodotti, la personalizzazione e la conclusione dell\'ordine.' },
      ],
    },
    'ai-chatbot': {
      title: 'Chatbot AI',
      shortTitle: 'Chatbot AI',
      headline: 'Il Tuo Brand, Potenziato da Qualsiasi AI',
      description:
        'Scegli tra OpenAI, Anthropic, z.ai, o porta il tuo modello. Configura personalità, tono e competenza per adattarti perfettamente alla tua azienda. Il supporto multi-provider significa che non sei mai vincolato.',
      metaDescription: 'Chatbot AI multi-provider per WhatsApp. Scegli OpenAI, Anthropic, z.ai o il tuo modello. Il tuo brand, la tua AI.',
      benefits: [
        { title: 'Multi-Provider', description: 'Passa da OpenAI, Anthropic, z.ai, llama.cpp e OpenRouter senza cambiare la tua configurazione.' },
        { title: 'Voce del Brand', description: 'Personalizza i prompt di sistema in modo che l\'AI parli con il tono e lo stile del tuo brand.' },
        { title: 'Consapevole del Contesto', description: 'L\'AI comprende la cronologia della conversazione e usa la tua base di conoscenza per risposte accurate.' },
      ],
      howItWorks: [
        { title: 'Scegli il Tuo Provider', description: 'Seleziona OpenAI, Anthropic, z.ai o qualsiasi endpoint compatibile con OpenAI.' },
        { title: 'Personalizza il Prompt', description: 'Scrivi un prompt di sistema che catturi la voce e la competenza del tuo brand.' },
        { title: 'Imposta il Modello', description: 'Scegli il modello adatto alle tue esigenze e al tuo budget — da veloce ed economico a potente e sfumato.' },
      ],
      useCases: [
        { title: 'Assistenza Clienti', description: 'Gestisci richieste di supporto complesse con un\'AI che comprende i tuoi prodotti e le tue policy.' },
        { title: 'Assistente alle Vendite', description: 'Consiglia prodotti, rispondi a domande tecniche e guida le decisioni d\'acquisto.' },
        { title: 'Bot di Consulenza', description: 'Offri consulenze e valutazioni iniziali basate sulla tua competenza.' },
      ],
    },
    'team-inbox': {
      title: 'Posta del Team',
      shortTitle: 'Posta del Team',
      headline: 'L\'AI Gestisce la Routine. Tu il Resto.',
      description:
        'Monitora tutte le conversazioni WhatsApp in tempo reale. Intervieni con una risposta umana quando l\'AI non basta. Passa fluidamente tra AI e agenti umani senza che il cliente se ne accorga.',
      metaDescription: 'Monitora le conversazioni WhatsApp in tempo reale. Intervieni con risposte umane quando l\'AI non basta. Passaggio fluido.',
      benefits: [
        { title: 'Monitoraggio Live', description: 'Guarda le conversazioni svilupparsi in tempo reale con elenchi di messaggi ad aggiornamento automatico.' },
        { title: 'Passaggio Umano', description: 'Prendi in mano qualsiasi conversazione con una risposta manuale. L\'AI si fa da parte finché non hai finito.' },
        { title: 'Cronologia Completa', description: 'Ogni messaggio viene registrato — cerca, filtra e rivedi qualsiasi conversazione in qualsiasi momento.' },
      ],
      howItWorks: [
        { title: 'L\'AI la Gestisce', description: 'I messaggi in arrivo ricevono risposte AI istantanee basate sulla tua base di conoscenza e sui tuoi flussi.' },
        { title: 'Tu Monitori', description: 'Guarda tutte le conversazioni dalla tua dashboard. Aggiornamenti in tempo reale, nessun refresh necessario.' },
        { title: 'Intervieni Quando Serve', description: 'Digita una risposta manuale per prendere il controllo. L\'AI si mette in pausa e riprende quando hai finito.' },
      ],
      useCases: [
        { title: 'Gestione delle Escalation', description: 'I problemi complessi vengono passati agli umani mentre l\'AI gestisce quelli semplici.' },
        { title: 'Gestione VIP', description: 'Intervieni nelle conversazioni con clienti di alto valore per un tocco personale.' },
        { title: 'Garanzia di Qualità', description: 'Rivedi le conversazioni dell\'AI e correggi le risposte per migliorare l\'accuratezza nel tempo.' },
      ],
    },
    campaigns: {
      title: 'Campagne WhatsApp',
      shortTitle: 'Campagne',
      headline: 'Raggiungi i Clienti Dove Leggono Davvero',
      description:
        'I messaggi WhatsApp hanno un tasso di apertura del 98%. Invia campagne mirate, promozioni e aggiornamenti direttamente sul telefono dei tuoi clienti. Messaggistica basata su modelli conforme alle policy di WhatsApp.',
      metaDescription: 'Invia campagne WhatsApp con tassi di apertura del 98%. Messaggistica basata su modelli, consegna mirata e conformità alle policy.',
      benefits: [
        { title: 'Tasso di Apertura del 98%', description: 'I messaggi WhatsApp vengono aperti. L\'email non può competere con quel livello di attenzione.' },
        { title: 'Basata su Modelli', description: 'I modelli di messaggio pre-approvati garantiscono che le tue campagne rispettino le policy di WhatsApp.' },
        { title: 'Consegna Mirata', description: 'Suddividi il tuo pubblico e invia il messaggio giusto alle persone giuste.' },
      ],
      howItWorks: [
        { title: 'Crea un Modello', description: 'Disegna il tuo modello di messaggio con variabili dinamiche per la personalizzazione.' },
        { title: 'Ottieni l\'Approvazione', description: 'Invia il tuo modello a WhatsApp per l\'approvazione — in genere entro 24 ore.' },
        { title: 'Invia la Tua Campagna', description: 'Trasmetti il tuo messaggio ai contatti selezionati con un solo clic.' },
      ],
      useCases: [
        { title: 'Vendite Flash', description: 'Invia promozioni sensibili al tempo che i clienti vedono davvero e su cui agiscono.' },
        { title: 'Promemoria Appuntamenti', description: 'Riduci le assenze con promemoria automatici degli appuntamenti via WhatsApp.' },
        { title: 'Lanci di Prodotto', description: 'Annuncia nuovi prodotti o servizi direttamente alla tua base di clienti.' },
      ],
    },
    analytics: {
      title: 'Dashboard Analitica',
      shortTitle: 'Analitica',
      headline: 'Scopri Cosa Funziona. Correggi Cosa Non Va.',
      description:
        'Tieni traccia dei volumi di messaggi, delle fonti di risposta, della popolarità dei trigger e dei pattern di conversazione. Vedi esattamente come sta performando il tuo agente AI e dove migliorare.',
      metaDescription: 'Tieni traccia dei volumi di messaggi WhatsApp, delle prestazioni dell\'AI, degli argomenti popolari e dei pattern di conversazione. Ottimizzazione basata sui dati.',
      benefits: [
        { title: 'Insight sui Messaggi', description: 'Monitora volumi in entrata/uscita, tempi di risposta e andamenti delle conversazioni nel tempo.' },
        { title: 'Suddivisione per Fonte', description: 'Vedi come le risposte si dividono tra regole, AI, flussi e agenti umani.' },
        { title: 'Argomenti Popolari', description: 'Scopri le domande più frequenti e i flussi più usati per ottimizzare la tua configurazione.' },
      ],
      howItWorks: [
        { title: 'I Messaggi Affluiscono', description: 'Ogni interazione WhatsApp viene tracciata e categorizzata automaticamente.' },
        { title: 'La Dashboard si Aggiorna', description: 'Grafici e metriche si aggiornano quotidianamente con gli ultimi dati.' },
        { title: 'Agisci sugli Insight', description: 'Usa i dati per aggiungere Q&A mancanti, migliorare i flussi e ottimizzare i prompt AI.' },
      ],
      useCases: [
        { title: 'Monitoraggio delle Prestazioni', description: 'Controlla quante conversazioni gestisce l\'AI rispetto agli agenti umani.' },
        { title: 'Analisi delle Lacune', description: 'Trova le domande a cui l\'AI non sa rispondere e aggiungile alla tua base di conoscenza.' },
        { title: 'Misurazione del ROI', description: 'Traccia i volumi di messaggi per quantificare il risparmio di tempo e costi.' },
      ],
    },
    'document-generation': {
      title: 'Generazione Documenti',
      shortTitle: 'Generazione Documenti',
      headline: 'Dalla Conversazione al Documento in Pochi Secondi',
      description:
        'Genera fogli Excel, documenti Word, PDF, Google Docs e Google Sheets direttamente dai dati della chat. Fatture, report, preventivi — creati e inviati automaticamente.',
      metaDescription: 'Genera Excel, Word, PDF, Google Docs e Sheets dalle conversazioni WhatsApp. Fatture, preventivi e report in autopilota.',
      benefits: [
        { title: 'Formati Multipli', description: 'Genera Excel, Word, PDF o Google Docs e Sheets nativi — qualsiasi cosa il tuo flusso di lavoro richieda.' },
        { title: 'Basata sui Dati', description: 'Usa le variabili della conversazione e il contesto per popolare i documenti con dati reali dei clienti.' },
        { title: 'Consegna Automatica', description: 'I documenti vengono generati e inviati al cliente via WhatsApp in automatico.' },
      ],
      howItWorks: [
        { title: 'Definisci il Documento', description: 'Imposta colonne, fonti di dati e formato nel passaggio di generazione del tuo flusso.' },
        { title: 'Raccogli i Dati', description: 'Il tuo flusso logico raccoglie le informazioni attraverso la conversazione.' },
        { title: 'Genera e Invia', description: 'Il documento viene creato e consegnato al cliente — nessun passaggio manuale.' },
      ],
      useCases: [
        { title: 'Generazione Fatture', description: 'Raccogli i dettagli dell\'ordine e genera automaticamente una fattura professionale.' },
        { title: 'Creatore di Preventivi', description: 'Passa in rassegna i requisiti e produci un documento di preventivo formattato.' },
        { title: 'Compilazione di Report', description: 'Raccogli punti dati tramite la chat e compilali in un report strutturato.' },
      ],
    },
    'super-powers': {
      title: 'Super Poteri',
      shortTitle: 'Super Poteri',
      headline: 'Il Tuo Agente AI Ha i Super Poteri',
      description:
        'Analisi visiva, ricerca web, lettura web e accesso alla documentazione GitHub — tutti disponibili come capacità che il tuo agente AI può usare durante le conversazioni.',
      metaDescription: 'Analisi visiva, ricerca web, lettura web e accesso ai docs di GitHub per il tuo agente AI su WhatsApp. Super poteri per la tua azienda.',
      benefits: [
        { title: 'Analisi Visiva', description: 'I clienti inviano foto e la tua AI le comprende — prodotti, documenti, screenshot, qualsiasi cosa.' },
        { title: 'Ricerca Web', description: 'La tua AI può cercare sul web per informazioni in tempo reale e rispondere in modo accurato.' },
        { title: 'Lettore Web', description: 'Estrai e riassumi i contenuti di qualsiasi URL condiviso dai tuoi clienti.' },
      ],
      howItWorks: [
        { title: 'Attiva i Super Poteri', description: 'Attiva Visione, Ricerca Web, Lettore Web o Zread nelle tue impostazioni.' },
        { title: 'Crea Flussi', description: 'Aggiungi passaggi di visione per analizzare immagini, o passaggi di ricerca web per ottenere dati in tempo reale.' },
        { title: 'Fornisci Risposte', description: 'La tua AI usa queste capacità durante le conversazioni per dare risposte migliori.' },
      ],
      useCases: [
        { title: 'Identificazione Prodotto', description: 'I clienti inviano la foto di un prodotto e ottengono identificazione e prezzo all\'istante.' },
        { title: 'Elaborazione Documenti', description: 'Estrai testo da foto di fatture, ricevute o contratti.' },
        { title: 'Ricerche in Tempo Reale', description: 'Cerca sul web per prezzi attuali, disponibilità o notizie per rispondere alle domande.' },
      ],
    },
  },

  industries: {
    ecommerce: {
      title: 'E-commerce',
      headline: 'Rendi WhatsApp il Tuo Principale Canale di Vendita',
      description: 'Automatizza le richieste sui prodotti, gli aggiornamenti sugli ordini, le richieste di reso e il recupero dei carrelli abbandonati. Il tuo agente AI gestisce l\'intero percorso del cliente su WhatsApp.',
      metaDescription: 'AI WhatsApp per l\'e-commerce. Automatizza richieste sui prodotti, tracciamento ordini, resi e assistenza clienti.',
      painPoints: [
        'I clienti abbandonano il carrello quando non ottengono risposte rapide',
        'Il team di supporto è sommerso di richieste "dov\'è il mio ordine"',
        'Nessun modo per raggiungere i clienti sul loro canale preferito',
      ],
      useCases: [
        { title: 'Assistente Catalogo Prodotti', description: 'I clienti descrivono ciò di cui hanno bisogno e la tua AI consiglia il prodotto giusto con prezzo e disponibilità.' },
        { title: 'Tracciamento Ordini', description: 'Aggiornamenti sullo stato dell\'ordine all\'istante quando il cliente chiede "dov\'è il mio ordine?".' },
        { title: 'Elaborazione Resi', description: 'Guida i clienti attraverso il processo di reso con flussi automatici e generazione di documenti.' },
      ],
    },
    healthcare: {
      title: 'Sanità',
      headline: 'Comunicazione con i Pazienti Migliore, Meno Lavoro Amministrativo',
      description: 'Automatizza la pianificazione degli appuntamenti, le richieste sulle ricette e i follow-up dei pazienti. Progettato per la consapevolezza HIPAA con comunicazioni sicure e private.',
      metaDescription: 'AI WhatsApp per la sanità. Automatizza la pianificazione degli appuntamenti, i follow-up dei pazienti e le richieste sulle ricette.',
      painPoints: [
        'Le linee telefoniche sono intasate dalle richieste di appuntamento',
        'Il personale passa ore in chiamate di pianificazione ripetitive',
        'I pazienti fanno fatica a contattarti fuori dall\'orario di lavoro',
      ],
      useCases: [
        { title: 'Pianificazione Appuntamenti', description: 'I pazienti prenotano, spostano o annullano appuntamenti su WhatsApp con l\'integrazione di Google Calendar.' },
        { title: 'Richieste sulle Ricette', description: 'Risposte automatiche su rinnovi delle ricette, istruzioni di dosaggio e orari della farmacia.' },
        { title: 'Triage dei Pazienti', description: 'I flussi logici guidano i pazienti attraverso un controllo dei sintomi e li indirizzano al reparto giusto.' },
      ],
    },
    education: {
      title: 'Istruzione',
      headline: 'Rispondi Istantaneamente a Ogni Domanda di Studenti e Genitori',
      description: 'Automatizza le richieste di iscrizione, le informazioni sui corsi, la ricerca di orari e i promemoria per il pagamento delle rette. La tua AI gestisce migliaia di studenti senza fatica.',
      metaDescription: 'AI WhatsApp per l\'istruzione. Automatizza richieste di iscrizione, informazioni sui corsi e comunicazione con gli studenti.',
      painPoints: [
        'Il personale è sommerso di domande di iscrizione ripetitive',
        'I genitori non riescono a contattare le iscrizioni nella stagione di picco',
        'Gli studenti hanno bisogno di risposte fuori dall\'orario di ufficio',
      ],
      useCases: [
        { title: 'Assistente Iscrizioni', description: 'Rispondi automaticamente a dettagli sui programmi, requisiti di ammissione e richieste sullo stato della domanda.' },
        { title: 'Informazioni sui Corsi', description: 'Gli studenti ottengono dettagli istantanei su orari, programmi e informazioni sui docenti.' },
        { title: 'Promemoria Rette', description: 'Promemoria automatici di pagamento e informazioni sui piani di rateizzazione via WhatsApp.' },
      ],
    },
    'real-estate': {
      title: 'Immobiliare',
      headline: 'Qualifica i Lead e Pianifica le Visite in Autopilota',
      description: 'Cattura le richieste immobiliari, qualifica gli acquirenti, pianifica le visite e invia documenti immobiliari — tutto automaticamente su WhatsApp.',
      metaDescription: 'AI WhatsApp per l\'immobiliare. Qualifica i lead, pianifica le visite e invia documenti immobiliari in automatico.',
      painPoints: [
        'Centinaia di richieste immobiliari ma pochi lead qualificati',
        'Pianificare le visite è un incubo di messaggi avanti e indietro',
        'Non riesci a rispondere alle richieste abbastanza in fretta prima che passino altrove',
      ],
      useCases: [
        { title: 'Corrispondenza Immobiliare', description: 'Gli acquirenti descrivono l\'immobile dei sogni e la tua AI suggerisce annunci corrispondenti con foto e dettagli.' },
        { title: 'Pianificazione Visite', description: 'Prenotazioni in calendario automatiche per le visite immobiliari con promemoria e conferme.' },
        { title: 'Consegna Documenti', description: 'Genera e invia automaticamente brochure immobiliari, planimetrie e listini prezzi come documenti PDF.' },
      ],
    },
    hospitality: {
      title: 'Ospitalità',
      headline: 'Vizia gli Ospiti Prima che Arrivino',
      description: 'Automatizza le conferme di prenotazione, le richieste di servizio in camera, i suggerimenti del concierge e i feedback degli ospiti. WhatsApp è la nuova reception.',
      metaDescription: 'AI WhatsApp per l\'ospitalità. Automatizza prenotazioni, servizi concierge e comunicazione con gli ospiti.',
      painPoints: [
        'Gli ospiti si aspettano risposte istantanee in qualsiasi momento',
        'Le richieste al concierge si perdono tra un turno e l\'altro',
        'La raccolta dei feedback dopo il soggiorno è discontinua',
      ],
      useCases: [
        { title: 'Assistente Prenotazioni', description: 'Gli ospiti controllano la disponibilità, prenotano la camera e ottengono conferme istantanee su WhatsApp.' },
        { title: 'Servizio Concierge', description: 'Suggerimenti potenziati dall\'AI per ristoranti, attività e trasporti.' },
        { title: 'Feedback degli Ospiti', description: 'Sondaggi automatici dopo il soggiorno e richieste di recensioni per migliorare la tua reputazione online.' },
      ],
    },
    restaurants: {
      title: 'Ristoranti',
      headline: 'Ricevi Ordini e Prenotazioni Senza Alzare il Telefono',
      description: 'Ordini via WhatsApp, gestione delle prenotazioni, richieste sul menu e aggiornamenti sulle consegne — tutto gestito automaticamente mentre il tuo personale si concentra sul cibo.',
      metaDescription: 'AI WhatsApp per i ristoranti. Ricevi ordini, gestisci prenotazioni e aggiorna i clienti in automatico.',
      painPoints: [
        'Il telefono non smette di suonare nelle ore di punta',
        'Il personale non riesce a gestire ordini e prenotazioni contemporaneamente',
        'I clienti vogliono vedere il menu prima di ordinare',
      ],
      useCases: [
        { title: 'Assistente Menu', description: 'I clienti sfogliano il menu, chiedono degli ingredienti e ottengono informazioni nutrizionali all\'istante.' },
        { title: 'Prenotazione Tavoli', description: 'Prenotazioni automatiche dei tavoli con data, ora, dimensione del gruppo e richieste speciali.' },
        { title: 'Aggiornamenti Ordini', description: 'Aggiornamenti in tempo reale sullo stato di consegna e ritiro inviati proattivamente su WhatsApp.' },
      ],
    },
    fitness: {
      title: 'Fitness',
      headline: 'Mantieni i Membri Coinvolti e Prenota le Classi in Qualsiasi Momento',
      description: 'Automatizza le prenotazioni delle classi, le richieste sulle iscrizioni, la ricerca di orari e i consigli sugli allenamenti. Il tuo personal trainer AI non si riposa mai.',
      metaDescription: 'AI WhatsApp per i centri fitness. Automatizza le prenotazioni delle classi, le richieste sulle iscrizioni e il coinvolgimento dei membri.',
      painPoints: [
        'Le richieste di prenotazione delle classi sommergono il personale della reception',
        'I membri fanno sempre le stesse domande su orari e prezzi',
        'Le assenze erodono i risultati senza un sistema di promemoria',
      ],
      useCases: [
        { title: 'Prenotazione Classi', description: 'I membri vedono l\'orario, controllano la disponibilità e prenotano la classe direttamente su WhatsApp.' },
        { title: 'Informazioni Iscrizioni', description: 'Risposte istantanee su piani, prezzi, strutture e vantaggi dell\'iscrizione.' },
        { title: 'Consigli Allenamento', description: 'Consigli fitness potenziati dall\'AI e suggerimenti di esercizi in base agli obiettivi dei membri.' },
      ],
    },
    'professional-services': {
      title: 'Servizi Professionali',
      headline: 'Meno Tempo per l\'Amministrazione, Più Tempo per i Clienti',
      description: 'Automatizza l\'inserimento dei clienti, la pianificazione degli appuntamenti, la raccolta dei documenti e gli aggiornamenti sui progressi. Servizi professionali, potenziati dall\'efficienza dell\'AI.',
      metaDescription: 'AI WhatsApp per i servizi professionali. Automatizza l\'inserimento dei clienti, la pianificazione e la comunicazione.',
      painPoints: [
        'L\'inserimento dei clienti richiede troppo scambio di messaggi',
        'I conflitti di pianificazione fanno perdere tempo a tutti',
        'I clienti si aspettano comunicazioni più rapide di quanto tu possa offrire',
      ],
      useCases: [
        { title: 'Inserimento Clienti', description: 'I flussi automatici raccolgono le informazioni dei clienti, i dettagli del caso e i documenti necessari.' },
        { title: 'Gestione Appuntamenti', description: 'Pianifica, sposta e invia promemoria per le riunioni con i clienti tramite Google Calendar.' },
        { title: 'Aggiornamenti di Stato', description: 'Mantieni i clienti informati con aggiornamenti automatici sui progressi e notifiche di traguardi.' },
      ],
    },
    automotive: {
      title: 'Automotive',
      headline: 'Dal Test Drive ai Promemoria di Manutenzione — Tutto su WhatsApp',
      description: 'Automatizza le richieste sui veicoli, le prenotazioni dei test drive, gli appuntamenti di servizio e i promemoria di manutenzione. La tua concessionaria non chiude mai.',
      metaDescription: 'AI WhatsApp per l\'automotive. Automatizza richieste sui veicoli, prenotazioni di test drive e promemoria di servizio.',
      painPoints: [
        'Centinaia di richieste sui veicoli ma nessun tempo per rispondere a tutte',
        'La pianificazione degli appuntamenti di servizio è manuale e soggetta a errori',
        'I clienti dimenticano i programmi di manutenzione e tu perdi ricavi',
      ],
      useCases: [
        { title: 'Bot Richieste Veicoli', description: 'I clienti chiedono di modelli, specifiche, prezzi e disponibilità — tutto risposto all\'istante.' },
        { title: 'Prenotazione Test Drive', description: 'Pianificazione automatica dei test drive con integrazione del calendario e promemoria.' },
        { title: 'Promemoria di Servizio', description: 'Promemoria proattivi di manutenzione basati su chilometraggio e intervalli di tempo.' },
      ],
    },
  },

  solutions: {
    marketing: {
      title: 'Per il Marketing',
      headline: 'Rendi WhatsApp il Tuo Miglior Canale di Marketing',
      description:
        'Cattura lead, coltiva i prospect e spingi le conversioni tramite WhatsApp — dove i tuoi clienti prestano davvero attenzione. Automatizza le campagne, monitora i risultati e fai crescere il tuo pubblico.',
      metaDescription: 'Rendi WhatsApp il tuo canale di marketing più efficace. Cattura lead, automatizza le campagne e spingi le conversioni.',
      painPoints: [
        { title: 'Posso raggiungere clienti che prestano davvero attenzione?', description: 'Il email marketing ha un tasso di apertura medio del 20%. WhatsApp offre il 98% — i tuoi messaggi vengono davvero visti.' },
        { title: 'Posso rispondere ai lead prima che passino altrove?', description: 'Ogni minuto di ritardo riduce la conversione dei lead del 10%. La tua AI risponde all\'istante, 24/7.' },
        { title: 'Posso personalizzare ogni messaggio senza assumere altre persone?', description: 'Invii gli stessi messaggi generici a tutti? L\'AI rende ogni interazione percepita come personale.' },
      ],
      features: [
        { title: 'Campagne WhatsApp', description: 'Invia messaggi mirati con campagne basate su modelli.' },
        { title: 'Flusso di Acquisizione Lead', description: 'Flussi automatici che qualificano e catturano le informazioni dei lead.' },
        { title: 'Base di Conoscenza Marketing', description: 'Suggerisci prodotti e risposte promozionali nel tuo Q&A.' },
        { title: 'Analitica', description: 'Traccia le prestazioni delle campagne, i volumi di messaggi e i tassi di conversione.' },
      ],
      stats: [{ label: 'Tasso di Apertura WhatsApp' }, { label: 'Maggiore Coinvolgimento' }, { label: 'Miglior Click-Through' }],
    },
    sales: {
      title: 'Per le Vendite',
      headline: 'Chiudi gli Affari Più Velocemente su WhatsApp',
      description:
        'Qualifica automaticamente i lead, pianifica appuntamenti, invia preventivi e proposte e chiudi gli affari — tutto tramite WhatsApp. Il tuo agente AI di vendita lavora 24 ore su 24.',
      metaDescription: 'Chiudi gli affari più velocemente su WhatsApp. Qualifica i lead, prenota appuntamenti, genera preventivi e converti 24/7.',
      painPoints: [
        { title: 'Posso catturare i lead fuori orario?', description: 'I lead arrivano fuori orario e si raffreddano entro la mattina. L\'AI li coinvolge all\'istante, in qualsiasi momento.' },
        { title: 'Posso smettere di perdere tempo con lead non qualificati?', description: 'Ore sprecate con lead non qualificati. I flussi logici qualificano automaticamente così ti concentri sui prospect caldi.' },
        { title: 'Posso inviare preventivi e proposte in pochi secondi?', description: 'Genera e invia preventivi, proposte e fatture professionali direttamente dalla conversazione.' },
      ],
      features: [
        { title: 'Flusso di Qualificazione Lead', description: 'Flussi automatici a più passaggi che filtrano e qualificano i lead prima del coinvolgimento del tuo team.' },
        { title: 'Prenotazione Appuntamenti', description: 'L\'integrazione con Google Calendar permette ai clienti di prenotare riunioni direttamente in chat.' },
        { title: 'Generazione Documenti', description: 'Genera automaticamente preventivi, fatture e proposte dai dati della conversazione.' },
        { title: 'Passaggio Umano', description: 'Passaggio fluido al rappresentante di vendita quando il lead è pronto a chiudere.' },
      ],
      stats: [{ label: 'Ciclo di Vendita Più Breve' }, { label: 'Risposta Più Rapida' }, { label: 'Acquisizione Lead' }],
    },
    support: {
      title: 'Per l\'Assistenza',
      headline: 'Assistenza Potenziata dall\'AI che Non Dorme Mai',
      description:
        'Risolvi l\'80% delle richieste di assistenza automaticamente con un\'AI che conosce la tua azienda alla perfezione. Passa i problemi complessi agli umani senza solutione di continuità. I tuoi clienti ottengono aiuto istantaneo, in qualsiasi momento.',
      metaDescription: 'Assistenza WhatsApp potenziata dall\'AI che non dorme mai. Risolvi l\'80% delle richieste in automatico con risposte istantanee e accurate.',
      painPoints: [
        { title: 'Posso smettere di rispondere alle stesse domande ripetutamente?', description: 'Le domande ripetitive divorano il tempo degli agenti. L\'AI gestisce la routine così gli umani gestiscono il complesso.' },
        { title: 'Posso offrire assistenza 24/7?', description: 'I clienti hanno bisogno di aiuto alle 23:00. Il tuo agente AI è sempre disponibile con risposte accurate.' },
        { title: 'Posso risolvere i problemi in secondi, non ore?', description: 'I clienti aspettano ore per una risposta via email. L\'assistenza su WhatsApp dà risposte in secondi.' },
      ],
      features: [
        { title: 'Base di Conoscenza', description: 'Un sistema Q&A completo che gestisce le domande comuni all\'istante.' },
        { title: 'Escalation Intelligente', description: 'L\'AI sa quando passare a un umano. Transizione fluida, nessun contesto perso.' },
        { title: 'Posta del Team', description: 'Monitora tutte le conversazioni, intervieni quando serve e traccia le metriche di risposta.' },
        { title: 'Super Poteri', description: 'Analisi visiva per l\'assistenza basata sulle foto, ricerca web per risposte in tempo reale.' },
      ],
      stats: [{ label: 'Richieste Risolte Automaticamente' }, { label: 'Minor Carico di Lavoro Agenti' }, { label: 'Tempo di Risposta' }],
    },
  },

  testimonials: {
    'Nimrod Chuang': {
      role: '',
      company: 'BACE Engineering Pte Ltd',
      quote: 'I miei potenziali clienti non vengono più ignorati perché ero troppo impegnato per gestire le loro richieste. Con waai posso acquisire lead e generare preventivi più velocemente che mai!',
    },
    'Steven Lau': {
      role: '',
      company: 'OUTSOURCE2US',
      quote: 'Sono sempre in viaggio. Rispondere ai messaggi era una seccatura e una distrazione. Finalmente ho la tranquillità, in qualsiasi momento e ovunque io sia.',
    },
    'Priya Sharma': {
      role: 'Responsabile Customer Success',
      company: 'CloudServe Solutions',
      quote: 'I flussi logici sono incredibili. Abbiamo costruito un sistema completo di qualificazione dei lead in un giorno. Quello che prima prendeva al nostro team vendite 30 minuti per lead ora richiede 30 secondi.',
    },
  },

  videoTitles: {
    'FYWVnfP-EEo': 'Un Paio di Mani in Più',
    PWM3RanP8rQ: 'Tranquillità',
    '--8IlCVWsNI': 'Opportunità Perdute',
    '14lt0wRuMw4': 'L\'Enigma Linguistico?',
  },
};

export default it;
