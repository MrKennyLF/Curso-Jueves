# Etapa 1: Construcción de la app Angular
FROM node:22 AS build
WORKDIR /app

# Clonamos el repositorio
RUN git clone https://github.com/MrKennyLF/Curso-Jueves.git .

# Instalamos Angular CLI globalmente y dependencias
RUN npm install -g @angular/cli
RUN npm install

# Compilamos manualmente la app Angular
RUN npx ng build --configuration production

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Eliminamos la página por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiamos la app compilada (Angular moderno usa dist/browser o dist/)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
