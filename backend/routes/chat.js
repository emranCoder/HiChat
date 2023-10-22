const express = require('express');
const router = express.Router();
const authCheck = require('../middleware/authHandler');
const { getChats, startChat, chatMessage } = require('../controller/chatController');
const { checkChatStatus } = require('../middleware/chat/chatValidate');


//ROUTE 1: Login User using:  POST '/api/chat'. No login required Auth
router.post('/create', checkChatStatus, startChat);
router.post('/message', chatMessage);



module.exports = router;