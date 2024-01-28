const mongoose = require('mongoose');

//const connectionString = process.env.CONNECTION_STRING;
const connectionString = 'mongodb+srv://admin:ksaEUYCbM2rMxMH1@cluster0.mhzuser.mongodb.net/weatherapp4'

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
