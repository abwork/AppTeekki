const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const medicines = require('./routes/api/medicines');
const app = express();

//use a bodyparser middleware to create application/json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database configuration
const db = require('./config/keys').mongoURI;

//mongoDB connection
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log(err));

//routes to use
app.use('/api/medicines', medicines);

//serve static resources if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  };

//port for the server
const port = process.env.PORT || 6000;

//listen for the server at port
app.listen(port, () => console.log(`Server running at port: ${port}`));  