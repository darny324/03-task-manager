const express = require('express');
const app = express();
const Tasks = require('./routes/tasks');
const connectDB = require('./db/database');
const cors = require('cors');
const ErrorHandler = require('./middleware/ErrorHandler')
const notFound = require('./middleware/notfound');
require('dotenv').config();

const port = 5000;
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/tasks', Tasks);
app.use('*', notFound);
app.use(ErrorHandler);

const startServer = async () => {
  try {
    await connectDB('mongodb+srv://Khant:Khant5461@cluster0.m9l0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0');
    app.listen(port, () => {
      console.log(`Port Listening on ${port}...`);
    });
  } catch ( err ) {
    console.log("Err:" + err.message); 
  }
}

startServer();

