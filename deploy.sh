#!/usr/bin/env bash
# Minimal deploy helper for SoukNova static + Next.js
# Usage: ./deploy.sh

set -e

echo "SoukNova – deploy helper"
echo "1. Ensure you are logged in to Vercel: npx vercel login"
echo "2. Link the project (first time): npx vercel link"
echo "3. Deploy preview: npx vercel"
echo "4. Deploy production: npx vercel --prod"
echo ""
echo "For the Next.js version, place it in /web and set root directory in Vercel to /web"
echo "Static files (launch.html, privacy.html, terms.html) remain at the repo root."
