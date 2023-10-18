const User = require('../models/User');
const bcrypt = require('bcrypt');


const addUser = async (req, res, next) => {
    try {
        let uData;
        const encPwd = await bcrypt.hash(req.body.pwd, 12);

        if (req.files && req.files.length > 0) {
            uData = {
                ...req.body,
                avatar: req.files[0].filename,
                pwd: encPwd,
            }
        } else {
            uData = {
                ...req.body,
                pwd: encPwd,
            }
        }

        const newUser = new User(uData);
        const addUser = await newUser.save();
        if (!addUser) { return res.res.status(500).send({ err: "Unable to add user!" }); }
        res.status(200).json({ message: "User added Successfully!", user: uData });
    } catch (error) {
        res.status(500).send({
            err: "Bad request!"
        });
    }
}

const getUser = async (req, res, next) => {
    try {
        const uId = req.params.id;
        const user = await User.findById(uId).select('-pwd -__v');
        res.status(200).json({ user: user });
    } catch (error) {
        res.status(500).send({
            err: "Bad request!"
        });
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id, ...bodyData } = { ...req.body };

        const user = await User.findByIdAndUpdate(id, bodyData);
        if (!user) {
            return res.status(500).send({
                err: "Server is down!"
            });
        }
        res.status(200).json({ mess: "You got a update!" });
    } catch (error) {
        res.status(500).send({
            err: "Bad request!"
        });
    }
}

const removeUser = async (req, res, next) => {
    try {


        res.status(200).json({ message: "User added Successfully!", user: uData });
    } catch (error) {
        res.status(500).send({
            err: "Bad request!"
        });
    }
}




module.exports = { addUser, getUser, updateUser, removeUser };
