FROM nginx
COPY ./.nuxt/dist /usr/share/nginx/html
