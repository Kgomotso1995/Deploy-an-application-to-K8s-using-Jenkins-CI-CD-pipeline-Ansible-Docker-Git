# Use Node.js LTS as base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --only=staging

# Copy application source
COPY . .

# Expose the app port
EXPOSE 3001

# Run the application
CMD ["npm", "start"]
