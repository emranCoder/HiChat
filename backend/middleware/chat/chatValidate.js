const express = require('express');
const Chat = require('../../models/Chat');

const checkChatStatus = async (req, res, next) => {
    try {
        const senderId = req.body.sender;
        const receiverId = req.body.receiver;
        const chat = await Chat.findOne({
            sender: senderId,
            receiver: receiverId
        });

        if (chat) {
            return res.status(404).send({ err: "Already Have the chat", chat });
        }
        next();
    } catch (error) {
        res.status(500).send({ err: "Midl Bad request!" });
    }

}


module.exports = { checkChatStatus };