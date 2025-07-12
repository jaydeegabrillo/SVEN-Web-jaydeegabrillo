# backend/Dockerfile
FROM php:8.2-apache

# ── 1. System & PHP extensions ────────────────────────────────────────────────
RUN apt-get update && apt-get install -y \
      git curl zip unzip libzip-dev libpng-dev libonig-dev libxml2-dev \
  && docker-php-ext-install pdo pdo_mysql zip

# ── 2. Enable Apache + point it at /var/www/public (Laravel web root) ─────────
RUN a2enmod rewrite

ENV APACHE_DOCUMENT_ROOT=/var/www/html/laravel/public
# change both DocumentRoot and <Directory> paths everywhere
RUN sed -ri "s!/var/www/html!${APACHE_DOCUMENT_ROOT}!g" \
        /etc/apache2/sites-available/*.conf /etc/apache2/apache2.conf

# ── 3. Set working dir & install Composer ─────────────────────────────────────
WORKDIR /var/www/html
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# ── 4. Copy source and fix permissions ────────────────────────────────────────
COPY . /var/www/html
RUN chown -R www-data:www-data /var/www/html

# ── 5. Run script for installations and migrations (Skip if done) ──────────────
COPY laravel/setup.sh /var/www/html/laravel/setup.sh
RUN chmod +x /var/www/html/laravel/setup.sh



EXPOSE 80
