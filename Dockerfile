# Gunakan image node Alpine sebagai base image untuk build
FROM node:18-alpine AS build

# Set working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json (atau yarn.lock) ke container
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh file dari direktori root dan src ke dalam container
COPY ./src ./src
COPY index.html ./       
COPY ./public ./public      
COPY tailwind.config.js ./
# Install TailwindCSS
RUN npm install tailwindcss postcss autoprefixer

# Build TailwindCSS untuk menghasilkan file style.css
RUN npx tailwindcss -i ./src/css/input.css -o ./src/css/style.css --minify

# Install http-server untuk menyajikan file statis
RUN npm install -g http-server

# Expose port 8080 untuk mengakses web di browser
EXPOSE 8080

# Set perintah untuk menjalankan server dan menyajikan file statis
CMD ["http-server", ".", "-p", "8080"]
