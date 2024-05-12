# step 1: Build React App
FROM node:16-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# step 2: Server With Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist .

# Copy Nginx configuration files
COPY nginx.conf /etc/nginx/nginx.conf
COPY test.conf /etc/nginx/conf.d/test.conf

EXPOSE 443
