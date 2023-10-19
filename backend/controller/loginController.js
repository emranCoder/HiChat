const express = require('express');
const User = require('../models/User');
const { checkPwd } = require('../config/utility');

const login = async (req, res) => {

    try {
        const { username, pwd } = { ...req.body };

        const user = await User.findOne({ $or: [{ username: username }, { mobile: username }, { email: username }] }).select('pwd auth');
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
        const authToken = {
            token: token,
            logIn: Date.now(),
            logOut: null,
        }
        user.auth = authToken;
        const tokenUpdate = await user.save();
        if (!tokenUpdate) {
            return res.status(404).send({
                err: "Authentication failed!",
            });
        }
        res.status(200).json({ token, id: userId });
    } catch (error) {
        res.status(500).send({
            err: "Bad request!",
            error
        });
    }
}

const logout = async (req, res) => {

    try {

    } catch (error) {
        res.status(500).send({
            err: "Bad request!",
        });
    }
}



module.exports = { login, logout };