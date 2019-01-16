FROM nginx:alpine

COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

COPY ./build /usr/share/nginx/html