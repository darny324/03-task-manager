const express = require('express');
const app = express();
const Tasks = require('./routes/tasks');
const connectDB = require('./db/database');
// require('dotenv').config();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/tasks', Tasks);

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

