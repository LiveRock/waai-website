#!/bin/bash
set -e

DOCROOT="/home/waai/public_html"
PROJECT="/home/ubuntu/projects/waai-website"

echo "Building waai.me..."
cd "$PROJECT"
npm ci --quiet
npm run build

echo "Deploying to $DOCROOT..."
# Preserve .well-known for SSL challenges
find "$DOCROOT" -not -name '.well-known' -not -name "$DOCROOT" -delete 2>/dev/null || true
cp -r dist/* "$DOCROOT/"
chown -R waai:waai "$DOCROOT"

echo "Done! Site: https://waai.me"
