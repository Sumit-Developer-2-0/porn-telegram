FROM node:16 # Or your preferred Node.js version
WORKDIR /app
COPY package*.json ./
RUN npm install # Or yarn install if you use yarn
COPY . .
CMD ["node", "index.js"]
