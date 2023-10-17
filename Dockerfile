FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]