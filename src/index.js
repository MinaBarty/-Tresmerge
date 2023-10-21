const express = require('express') ;
// const mongoose = require('mongoose') ;
const redis = require ('redis');
const { client } = require('pg');

// init app
const PORT = 4000 ;
const app =express();

//connect to redis
const REDIS_HOST = 'redis';
const REDIS_PORT = 6379;
const redisclient =redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisclient.on('error', err => console.log('Redis Client Error', err));
redisclient.on('connect', () => console.log('connected to redis....'));
redisclient.connect();

// connect DB
// const DB_USER='root';
// const DB_PASSWORD = 'example';
// const DB_PORT = 27017 ;
// const DB_HOST = 'mongo'

// const URI =`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017`;
// mongoose.connect(URI).then(() => console.log('connected to db '));

// connect to postgres
const DB_USER='root';
const DB_PASSWORD = 'example';
const DB_PORT = 5423 ;
const DB_HOST = 'mongo'

const URI =`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017`;
mongoose.connect(URI).then(() => console.log('connected to db '));


app.get('/', (req , res) => {
    redisclient.set('products','products....');
    res.send('<h1>Hello Mina Aziz Ygamed fash5! Dev</h1>')
}) ;

app.get('/data', async(req , res) => {
    const products = await redisclient.get('products');
    res.send(`<h1>Hello Mina Aziz Ygamed fash5! Dev</h1>' <h2>${products}</h2>`)
}) ;

app.listen(PORT , () => console.log('app is up and running on port :', PORT)) ;