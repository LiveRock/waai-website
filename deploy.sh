#!/bin/bash
set -e

# Load nvm so we run a modern Node (>=22) even in non-interactive shells
# (SSH forced-command from the GitHub Action, cron, CI). Without this the
# shell resolves /usr/bin/node (v12) and `astro build` aborts with
# "Node.js v12 is not supported by Astro!".
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

DOCROOT="/home/waai/public_html"
PROJECT="/home/ubuntu/projects/waai-website"

cd "$PROJECT"

# Pull latest code if git repo
if [ -d ".git" ]; then
  git pull --rebase origin main 2>/dev/null || true
fi

npm ci --quiet
npm run build

echo "Deploying to $DOCROOT..."
# Preserve .well-known for SSL challenges
sudo find "$DOCROOT" -mindepth 1 -not -name '.well-known' -delete 2>/dev/null || true
sudo cp -r dist/* "$DOCROOT/"
sudo chown -R waai:waai "$DOCROOT"

echo "$(date): waai.me rebuilt and deployed"
