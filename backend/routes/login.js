const express = require('express');
const router = express.Router();
const { loginValidates, loginValidation } = require('../middleware/user/validationCheck');
const { login, logout } = require('../controller/loginController');



//ROUTE 1: Login User using:  POST "/api/login/. No login required Auth
router.post('/', loginValidates, loginValidation, login);

module.exports = router;