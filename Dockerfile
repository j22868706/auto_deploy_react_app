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

# Copy SSL Certificates
COPY /etc/letsencrypt/live/blog.may11th2023.com/fullchain.pem /etc/nginx/cert.pem
COPY /etc/letsencrypt/live/blog.may11th2023.com/privkey.pem /etc/nginx/key.pem

EXPOSE 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
