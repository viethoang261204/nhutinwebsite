#!/bin/bash

# Build script for Render deployment

echo "🚀 Starting build process..."

# Install PHP dependencies
echo "📦 Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm ci

# Build assets
echo "🔨 Building assets..."
npm run production

# Generate application key if not exists
echo "🔑 Generating application key..."
php artisan key:generate --force

# Clear and cache configuration
echo "⚡ Optimizing application..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run database migrations
echo "🗄️ Running database migrations..."
php artisan migrate --force

# Create storage link
echo "🔗 Creating storage link..."
php artisan storage:link

echo "✅ Build completed successfully!"
