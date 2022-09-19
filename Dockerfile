FROM node:16

WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV DATABASE_FILENAME=./db/data.db

# Must be replaced with configuration provided externally
ENV NEXT_PUBLIC_STRAPI_API_URL=https://cms.henryford.edu.ar
ENV NEXT_PUBLIC_GA_MEASUREMENT_ID=G-61MY92XHNB

# Prepare things now (I do it to avoid redoing it on all rebuilds)
RUN apt update -y
RUN apt install screen -y

# Make subfolders
RUN mkdir frontend
RUN mkdir backend

# Copy all three packages json
COPY package*.json ./
COPY frontend/package*.json ./frontend
COPY backend/package*.json ./backend

# Install all dependencies
RUN npm install

# Copy source code
COPY . .

# Use localhost to internal frontend build
RUN echo $'\n'127.0.0.1$'\t'cms.henryford.edu.ar >> /etc/hosts
# Start dev server on background
RUN cd backend
RUN screen -d -m -S temporal_cms_server_for_build_frontend npm run develop

RUN cd ..
RUN cd frontend
# Give time to CMS dev server to start
RUN sleep 20
RUN npm run build
# Quit dev server
RUN screen -X -S temporal_cms_server_for_build_frontend quit

RUN cd ..

CMD ["npm", "run", "start"]