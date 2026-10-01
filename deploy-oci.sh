#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/home/ubuntu/prituhit}"
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

if [ -f .env.example ] && [ ! -f .env ]; then
  cp .env.example .env
fi

docker compose down --remove-orphans || true
docker compose up -d --build --force-recreate

echo "Deployment finished through Traefik Docker stack."
