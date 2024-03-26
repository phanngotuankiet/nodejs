# Build stage
FROM node:14 AS build
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

# Production stage
FROM nginx:1.19
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]