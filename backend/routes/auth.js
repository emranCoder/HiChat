const express = require('express');
const router = express.Router();
const avatarUpload = require('../middleware/user/avatarUpload');
const { userValidates, avatarValidation } = require('../middleware/user/validationCheck');
const { addUser, getUser, updateUser, removeUser } = require('../controller/userController');

//ROUTE 1: Create a User using:  POST "/api/auth/createuser". No login required Auth
router.post('/createuser', avatarUpload, userValidates, avatarValidation, addUser);


//ROUTE 2: Ge a User using:  GET "/api/auth/getuser". Login Required
router.get('/getuser/:id', getUser);

//ROUTE 3: Update a User using:  PUT "/api/auth/updateuser". login required Auth
router.put('/updateuser', updateUser);

//ROUTE 4: Delete a User using:  DELETE "/api/auth/deleteuser".login required Auth
router.delete('/deleteuser', removeUser);



module.exports = router;