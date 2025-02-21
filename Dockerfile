# Usando a imagem oficial do Node.js
FROM node:16

# Criando diretório de trabalho
WORKDIR /app

# Copiando arquivos do projeto
COPY . .

# Instalando dependências
RUN npm install

# Compilando o TypeScript
RUN npm run build

# Expõe a porta em que o app vai rodar
EXPOSE 3000

# Inicia o servidor
CMD ["npm", "start"]
