const express = require('express');
const app = express();
const Tasks = require('./routes/tasks');
const connectDB = require('./db/database');
require('dotenv').config();

const port = 5000;

app.use(express.json());
app.use('/api/tasks', Tasks);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Port Listening on ${port}...`);
    });

  } catch ( err ) {
    console.log(err.message); 
  }
}

startServer();

