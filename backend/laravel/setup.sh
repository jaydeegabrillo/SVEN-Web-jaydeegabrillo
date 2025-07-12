#!/bin/sh

# Only run setup if .setup-complete doesn't exist
if [ ! -f .setup-complete ]; then
  echo "Running Laravel setup..."

  composer install && \
  php artisan key:generate && \
  php artisan migrate && \
  composer require darkaonline/l5-swagger && \
  php artisan vendor:publish --provider="L5Swagger\\L5SwaggerServiceProvider"
  php artisan l5-swagger:generate

  echo "Fixing permissions for Laravel..."
  chown -R www-data:www-data storage bootstrap/cache
  chmod -R 775 storage bootstrap/cache

  php artisan config:clear
  php artisan route:clear
  php artisan view:clear
  php artisan cache:clear

  touch .setup-complete
else
  echo "Laravel setup already completed. Skipping..."
fi

# Always run apache at the end (if you're using apache-based image)
apache2-foreground
