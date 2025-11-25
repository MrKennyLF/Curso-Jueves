# --- ETAPA 1: BUILD (Compilar la aplicación Angular) ---
    #--La versión de Node debe ser superior a 20 para Angular 16+ ---
FROM node:22-alpine as builder
# Instalamos git para clonar el repositorio
RUN apk add --no-cache git

WORKDIR /app
# Clonamos el repositorio directamente en el contenedor
RUN git clone https://github.com/MrKennyLF/Curso-Jueves.git .
# Instalamos las dependencias y construimos la aplicación Angular
RUN npm install
RUN npm run build
# --- ETAPA 2: SERVIR (Servir la aplicación con Nginx) ---
FROM nginx:alpine
# Copiamos los archivos construidos desde la etapa de build al directorio de Nginx
COPY --from=builder /app/dist/*/browser /usr/share/nginx/html
# Exponemos el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]