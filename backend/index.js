const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const { errorHandler, notFoundError } = require('./middleware/error_handler');

const app = express()
dotenv.config();


app.use('/api/auth', authRouter);

app.use(errorHandler);
app.use(notFoundError);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})