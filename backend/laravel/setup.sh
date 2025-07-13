#!/bin/bash
set -e

# Display what we're doing
echo "Starting Laravel setup script..."

# Only run setup if .setup-complete doesn't exist
if [ ! -f .setup-complete ]; then
  echo "Running Laravel setup..."

  # Install dependencies
  composer install
  
  # Generate key
  php artisan key:generate --force
  
  # Try migrations with retry logic
  echo "Running database migrations..."
  max_retries=5
  retry_count=0
  
  until php artisan migrate --force || [ $retry_count -ge $max_retries ]; do
    retry_count=$((retry_count+1))
    echo "Migration attempt $retry_count of $max_retries failed. Retrying in 5 seconds..."
    sleep 5
  done
  
  if [ $retry_count -ge $max_retries ]; then
    echo "Migration failed after $max_retries attempts. Continuing anyway..."
  else
    echo "Migrations completed successfully!"
  fi
  
  # Install and configure Swagger
  composer require darkaonline/l5-swagger
  php artisan vendor:publish --provider="L5Swagger\\L5SwaggerServiceProvider"
  php artisan l5-swagger:generate

  # Fix permissions
  echo "Fixing permissions for Laravel..."
  chown -R www-data:www-data storage bootstrap/cache
  chmod -R 775 storage bootstrap/cache

  # Clear caches
  php artisan config:clear
  php artisan route:clear
  php artisan view:clear
  php artisan cache:clear

  # Mark as completed
  touch .setup-complete
else
  echo "Laravel setup already completed. Skipping..."
fi

# Always run apache at the end
echo "Starting Apache..."
exec apache2-foreground