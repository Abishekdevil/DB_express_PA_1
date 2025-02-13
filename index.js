const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const app = express();
const port = 3000;
const uri=process.env.uri;
app.use(express.static('static'));
const mongoose=require('mongoose');

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


mongoose.connect(uri)
.then(()=>{console.log('Connected to database')})
.catch((err)=>{console.log('Error',err)})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});







