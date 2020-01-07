FROM node:10.16.3 as builder

# Create and go into app home
WORKDIR /usr/src/app
RUN npm install
COPY . .
RUN npm run build

# Put static files from buid stage into nginx
FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]