FROM node:16

WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV DATABASE_FILENAME=./db/data.db

# Must be replaced with configuration provided externally
ENV NEXT_PUBLIC_STRAPI_API_URL=https://cms.henryford.edu.ar
ENV NEXT_PUBLIC_GA_MEASUREMENT_ID=G-61MY92XHNB

# Make subfolders
RUN mkdir frontend
RUN mkdir backend

# Copy all three packages json
COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/

# Install all dependencies
RUN npm install

# Copy source code
COPY . .

# Add x permission
RUN chmod +x ./entrypoint.sh

# Build backend
RUN cd backend && npm run build
RUN cd ..

CMD ["npm", "run", "start"]