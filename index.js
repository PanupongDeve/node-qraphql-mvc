const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);

const Middleware = require('./middlewares/AllMiddlewares');



const db = require('./config/db');
mongoose.connect(db.mongoURI);
const dbConnection = mongoose.connection;

// if ERROR
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', () => {
    console.log('Database connection!!');
});



Middleware(app);



const PORT = process.env.PORT || 5000;


http.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

