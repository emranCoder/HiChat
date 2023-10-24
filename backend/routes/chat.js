const express = require('express');
const router = express.Router();
const authCheck = require('../middleware/authHandler');
const { getChats, startChat, chatMessage, getMessages } = require('../controller/chatController');
const { checkChatStatus } = require('../middleware/chat/chatValidate');


//ROUTE 1: Create Chat:  POST '/api/chat'. No login required Auth
router.post('/create', checkChatStatus, startChat);
//ROUTE 2: Chat with message:  POST '/api/chat'. No login required Auth
router.post('/message', chatMessage);
//ROUTE 3: Get all message:  POST '/api/chat'. No login required Auth
router.get('/allchats', authCheck, getChats);
//ROUTE 4: Get all message:  POST '/api/chat'. No login required Auth
router.get('/allmess/:id', getMessages);



module.exports = router;