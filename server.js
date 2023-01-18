const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const Person = require('./models/person');
const peopleRoutes = require('./routes/people');

app.use('/people', peopleRoutes);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
