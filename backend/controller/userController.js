const User = require('../models/User');
const bcrypt = require('bcrypt');


async function addUser(req, res, next) {
    console.log(req.body);
    try {
        let uData;
        const encPwd = await bcrypt.hash(req.body.pwd, 12);

        if (req.files && req.files.length > 0) {
            uData = {
                ...req.body,
                avatar: req.files.filename,
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
        res.status(500).send({ err: "Bad request!" });
    }
}

module.exports = { addUser };
