

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');
require('dotenv/config');

const app = express();

//app.use(cors());
app.use(bodyParser.json());


const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
	res.send('We are on home');
})

mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useNewUrlParser: true
	},
	() => {
		console.log('Connected to db');
	}
);

app.listen(3000);