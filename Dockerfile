# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Make port available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV PORT 3333

# Run app when the container launches
CMD ["node", "index.js"]
