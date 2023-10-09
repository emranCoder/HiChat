const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { userValidates } = require('../middleware/user/validationCheck');
const { addUser } = require('../controller/userController');

//ROUTE 1: Create a User using:  POST "/api/auth/createuser". No login required Auth
router.post('/createuser', userValidates, addUser);


//ROUTE 2: Ge a User using:  GET "/api/auth/getuser". Login Required
router.get('/getuser', (req, res) => {
    res.send('Ready to go!');
})

//ROUTE 3: Update a User using:  PUT "/api/auth/updateuser". login required Auth
router.put('/updateuser', (req, res) => {
    res.send('Ready to go!');
})

//ROUTE 4: Delete a User using:  DELETE "/api/auth/deleteuser".login required Auth
router.delete('/deleteuser', (req, res) => {
    res.send('Ready to go!');
})



module.exports = router;