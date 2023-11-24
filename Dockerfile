# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install -g

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application will run on (replace 3000 with your desired port)
EXPOSE 8111

# Define the command to start your Node.js application
CMD ["node", "index.js"]
