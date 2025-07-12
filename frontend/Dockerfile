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

# Expose and run
EXPOSE 3000
CMD ["npm", "start"]
