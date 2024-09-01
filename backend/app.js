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
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Port Listening on ${port}...`);
    });
  } catch ( err ) {
    console.log("Err:" + err.message); 
  }
}

startServer();

