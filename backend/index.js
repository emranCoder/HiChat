const express = require('express');
const db = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const loginRoutes = require('./routes/login');
const { errorHandler, notFoundError } = require('./middleware/error_handler');

const app = express()
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);
app.use('/api/login', loginRoutes);

app.use(notFoundError);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`);
    db();
});
