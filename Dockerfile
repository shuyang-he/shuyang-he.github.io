# build environment
FROM node as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install 
COPY . .
RUN npm run build

# production environment
FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
