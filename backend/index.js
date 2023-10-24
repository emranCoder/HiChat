const express = require('express');
const path = require('path');
const db = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const loginRoutes = require('./routes/login');
const chatRoutes = require('./routes/chat');
const { errorHandler, notFoundError } = require('./middleware/error_handler');

const app = express()
dotenv.config();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "token")
    next();
});

app.use('/avatar', express.static(path.join(__dirname, '/public/uploads/avatars')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/auth', authRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/chat', chatRoutes);


app.use(notFoundError);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`);
    db();
});
