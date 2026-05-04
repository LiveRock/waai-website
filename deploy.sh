#!/bin/bash
set -e

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
