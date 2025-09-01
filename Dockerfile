# Base image
FROM node:22.19.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json & package-lock.json first (to cache npm install)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy rest of the app code
COPY . .

# Expose API port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]
