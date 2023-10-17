FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install -g npm@10.2.0

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]