const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );

mongoose
.connect('mongodb://localhost:27017/week7') //'mongodb://localhost:27017/week6'
.then(() => console.log('DB connect success'))
.catch((error) => {
    console.log(error);
})