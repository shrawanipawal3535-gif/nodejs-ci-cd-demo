# Use lightweight Node.js image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source code
COPY src/ ./src/

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
