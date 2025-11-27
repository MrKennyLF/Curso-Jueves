# ==============================
# 1 - Etapa de compilación
# ==============================
FROM node:20 AS builder

# Directorio donde trabajaremos
WORKDIR /app

# Clonar repo público
RUN git clone https://github.com/MrKennyLF/Curso-Jueves.git .

# Instalar dependencias
RUN npm install

# Compilar Angular en producción
RUN npm run build -- --configuration production

# ==============================
# 2 - Etapa de producción con nginx
# ==============================
FROM nginx:alpine

# Copiar el build al servidor nginx
COPY --from=builder /app/dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
