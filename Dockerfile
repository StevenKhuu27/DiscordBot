FROM node:17
#Working Dir
WORKDIR C:\Users\Steven\Documents\Js\SkoroBot

# Copy Package json Files
COPY package*.json ./

#Install Files
RUN npm install

#Copy Source Files
COPY . .

#Build
#RUN npm run build

#Build your commands
CMD [ "node", "deploy-commands" ]
CMD [ "npm", "start"]