const express = require('express');
const { resolve } = require('path');
const mongoose=require("mongoose")

const app = express();
const port = 3010;

app.use(express.static('static'));
require('dotenv').config();


mongoose.connect(process.env.mongo_url)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log('Error connecting to database:', err));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



