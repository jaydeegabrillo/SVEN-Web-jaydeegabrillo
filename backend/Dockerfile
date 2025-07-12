FROM php:8.2-apache

# Install PHP Extensions
RUN apt-get update && apt-get install -y \
    zip unzip git curl libzip-dev libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Enable mod_rewrite
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing app
COPY . /var/www

# Permissions
RUN chown -R www-data:www-data /var/www

# Expose port 80
EXPOSE 80
