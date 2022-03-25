# Basisimage mit Node in Version 16
FROM node

# Erzeugen ein Arbeitsverzeichnis und wechseln dahin
WORKDIR /usr/src/app

# Kopieren package.json
COPY package*.json ./

# Installieren alle Abhängigkeiten
RUN npm install

# Kopieren den restlichen SourceCode
COPY . . 

# Öffnen Port 3000
EXPOSE 3000

# Beim Ausführen des Images wird dieser Befehl ausgeführt
CMD ["node", "index.js"]