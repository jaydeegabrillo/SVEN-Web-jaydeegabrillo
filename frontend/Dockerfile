FROM node:18

# Set working directory
WORKDIR /app

# If package.json does not exist, create the React app
RUN [ ! -f package.json ] && npx create-react-app . || echo "React app already exists"

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files
COPY . .

# Setup environment file
RUN if [ -f .env.example ] && [ ! -f .env ]; then \
      cp .env.example .env && \
      echo "Created .env file from example"; \
    elif [ ! -f .env ]; then \
      echo "No .env.example found, creating basic .env file"; \
      touch .env && \
      echo "REACT_APP_API_URL=http://localhost:8000/api" >> .env; \
    fi

# Expose and run
EXPOSE 3000
CMD ["npm", "start"]
