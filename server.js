require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const cors = require('cors');


app.use(express.static('public'))
app.use(express.json());

//CONNECT DATABASE from db.js module import
const connectDB = require('./config/db');
connectDB();

//CORS Config\
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')

}
app.use(cors(corsOptions));


// Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');



//Routes 
app.get('/', (req, res) => {
    res.render('index');
})

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));



app.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}...`);
})