# Usar una imagen ligera de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa Vite (por defecto 5173)
EXPOSE 5173

# Comando para ejecutar en modo desarrollo con acceso desde el host
CMD ["npm", "run", "dev", "--", "--host"]
