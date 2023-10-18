const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { checkPwd } = require('../config/utility');

const login = async (req, res) => {

    try {
        const { username, pwd } = { ...req.body };

        const user = await User.findOne({ $or: [{ username: username }, { mobile: username }, { email: username }] }).select('pwd');
        if (!user) {
            return res.status(404).send({
                err: "Check fields!",
            });
        }
        const userPwd = user.pwd;
        const userId = user._id;
        const value = username + "_" + userId;
        const token = await checkPwd(pwd, userPwd, value);
        if (!token) {
            return res.status(404).send({
                err: "Authentication failed!",
            });
        }
        res.status(200).json({ token, id: userId });
    } catch (error) {
        res.status(500).send({
            err: "Bad request!",
        });
    }
}

module.exports = login;