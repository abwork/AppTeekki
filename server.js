const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const medicines = require('./routes/api/medicines');
const app = express();

//use a bodyparser middleware to create application/json parser
app.use(bodyParser.json());

//database configuration
const db = require('./config/keys').mongoURI;

//mongoDB connection
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));

//routes to use
app.use('/api/medicines', medicines);

//port for the server
const port = process.env.PORT || 5000;

//listen for the server at port
app.listen(port, () => console.log(`Server running at port: ${port}`));  