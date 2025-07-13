#!/bin/sh
set -e

# Display what we're doing
echo "Starting Laravel setup script..."

# Only run setup if .setup-complete doesn't exist
if [ ! -f .setup-complete ]; then
  echo "Running Laravel setup..."

  # Create .env file if it doesn't exist
  if [ ! -f .env ]; then
    echo "Creating .env file from example..."
    cp .env.example .env
  else
    echo ".env file already exists"
  fi


  # Install dependencies
  composer install
  
  # Generate key and run migrations
  php artisan key:generate
  php artisan migrate
  
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
exec /usr/local/bin/apache2-foreground