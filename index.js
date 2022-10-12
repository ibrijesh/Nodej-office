const express = require("express");
const config = require("config");
const users = require('./routes/user');
const movies = require('./routes/movie');
const { User } = require('./models/user')
const app = express();

app.use(express.json());


app.use('/api/users',users);
app.use('/api/movies',users);


const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
 console.log(`Listening on port ${port}...`)
);