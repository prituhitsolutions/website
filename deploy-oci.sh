#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/prituhit}"
GIT_URL="${GIT_URL:-https://github.com/prituhitsolutions/website.git}"

mkdir -p "$APP_DIR"
cd "$APP_DIR"

if [ -d .git ]; then
  git fetch origin
  git checkout main
  git pull --ff-only origin main
else
  git clone "$GIT_URL" "$APP_DIR"
fi

npm ci
npm ci --prefix server
npm ci --prefix client
npm run build

npm install -g pm2 >/dev/null 2>&1 || true
pm2 restart prituhit || pm2 start ecosystem.config.cjs --name prituhit

echo "Deployment finished."
