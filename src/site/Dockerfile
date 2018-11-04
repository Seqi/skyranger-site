FROM node:6.12.0-alpine as builder

WORKDIR /src

COPY package.json package.json

RUN npm install --production

COPY . .

RUN npm run build 

FROM nginx

COPY --from=builder src/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]