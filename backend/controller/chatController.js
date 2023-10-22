const express = require('express');
const { checkPwd, tokenVerify } = require('../config/utility');
const User = require('../models/User');
const Chat = require('../models/Chat');
const Messages = require('../models/Messages');

const getChats = async (req, res) => {
    try {
        res.status(200).send({ mess: "It's Get Chat's Controller" });
    } catch (error) {
        res.status(500).send({
            err: "Bad request!",
        });
    }
}

const startChat = async (req, res, next) => {

    try {
        const data = { ...req.body };
        const senderId = req.body.sender;
        const receiverId = req.body.receiver;
        const chat = new Chat(data);
        const saveChat = await chat.save();
        if (!saveChat) {
            return res.status(404).send({ err: "Server is down!" });
        }
        const senderUserUpdate = await User.findByIdAndUpdate(senderId, {
            $push: {
                chats: saveChat._id,
            }
        });
        const receiverUserUpdate = await User.findByIdAndUpdate(receiverId, {
            $push: {
                chats: saveChat._id,
            }
        });
        if (!senderUserUpdate || !receiverUserUpdate) {
            return res.status(404).send({ err: "Server is down!" });
        }
        const receiverData = await saveChat.populate('receiver');
        res.status(200).send({ mess: "It's Get Add Chat Controller", recData: receiverData });
    } catch (error) {
        res.status(500).send({ err: "Bad request!", error });
    }
}


const chatMessage = async (req, res) => {
    try {

        const data = { ...req.body };
        const id = data.id;
        delete data.id;
        const messages = new Messages(data);
        const saveMessages = await messages.save();
        if (!messages) {
            return res.status(404).send({ err: "Server is down!" });
        }
        const messId = saveMessages._id;
        const chat = await Chat.findByIdAndUpdate(id, {
            $push: {
                message: messId,
            }
        });
        if (!chat) {
            return res.status(404).send({ err: "Server is down!" });
        }
        res.status(200).send({ mess: "Your message added", saveMessages });
    } catch (error) {
        res.status(500).send({
            err: "Bad request!",
        });
    }
}


module.exports = { getChats, startChat, chatMessage };