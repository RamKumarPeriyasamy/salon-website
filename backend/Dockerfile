FROM node:18-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Create a .env file with the MongoDB connection string
RUN echo "MONGO_URI=mongodb://mongo:27017/salonDB" > .env
RUN echo "PORT=9004" >> .env
RUN echo "NODE_ENV=development" >> .env

# Other environment variables can be added here
# RUN echo "JWT_SECRET=your_jwt_secret" >> .env

# Expose the port
EXPOSE 9004

# Start the server
CMD ["npm", "start"]