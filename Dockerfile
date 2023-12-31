FROM node as base 

FROM base as devlopment

WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
EXPOSE 4000
CMD [ "npm" , "run", "start-dev" ]

FROM base as production

WORKDIR /app
COPY package.json /app/
RUN npm install --omit=dev
COPY . .
EXPOSE 4000
CMD [ "npm" , "start" ]