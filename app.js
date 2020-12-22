const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());



const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// routes
app.get('/', (req, res) => {
  res.send('hello we are on home')
})


// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('connected to DB!')
})


app.listen(3000);
