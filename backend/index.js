const express = require('express');
const db = require('./config/db');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const { errorHandler, notFoundError } = require('./middleware/error_handler');

const app = express()
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRouter);

app.use(notFoundError);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`);
    db();
});
