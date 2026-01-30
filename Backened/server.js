const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const connectDB = require('./Utils/DB');

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello, World!');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;