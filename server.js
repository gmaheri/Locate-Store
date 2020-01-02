const express = require('express');
const path  = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db')

//load env vars
dotenv.config({path : './config/config.env'});

//connect to DB
connectDB();

//initialize express
const app = express();

//Body Parser
app.use(express.json());

//Enable cors
app.use(cors());

app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});


