const express = require('express');
const fs = require('fs');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const createHttpError = require('http-errors');
const Uploader = require('./avatarUpload');

const userValidates = [
    // Validation checks using express-validator
    check('fName', 'First name is required').not().isEmpty().isAlpha("en-US", { ignore: " " }),
    check('lName', 'Last name is required').not().isEmpty().isAlpha("en-US", { ignore: " " }),
    check('email')
        .isEmail().trim()
        .withMessage('Invalid email format')
        .custom(async (data) => {
            try {
                const user = await User.findOne({ email: data });
                if (user) {
                    throw createHttpError("Email already use!");
                }
            } catch (error) {
                throw createHttpError(error.message);
            }
        }),
    check("mobile")
        .isMobilePhone("bn-BD", { strictMode: true, })
        .withMessage("Only BD number allowed!")
        .trim().custom(async (data) => {
            try {
                const user = await User.findOne({ mobile: data });
                if (user) {
                    throw createHttpError("Number already is use!");
                }
            } catch (error) {
                throw createHttpError(error.message);
            }
        }),
    check('pwd', 'Password must be strong 8 character, mix with upper case, lowercase & with number').isStrongPassword(),
    check('dateOfBirth', 'Invalid date of birth').isISO8601(),
];


const avatarValidation = (req, res, next) => {
    const errors = validationResult(req);
    const allErrors = errors.mapped();

    if (Object.keys(allErrors).length === 0) {
        const upload_avatar = Uploader("avatars", ["image/jpeg", "image/jpg", "image/png"], 1000000, "Only .jpg, jpeg or .png format allowed!");
        upload_avatar.any()(req, res, (err) => {
            if (err) {
                return res.status(500).json({
                    errors: {
                        avatar: { msg: err.message },
                    }
                })
            }
        });
        next();
    } else {

        const fileDest = '../../public/uploads/avatar/';
        if (req.files && req.files.length > 0) {
            const fileName = req.files[0].fileName;
            const removeFile = fs.unlink(path.join(__dirname, fileDest + fileName))
            if (!removeFile) {
                console.log(removeFile);
            }

        }

        res.status(500).json({ err: allErrors });
    }


}



module.exports = { userValidates, avatarValidation };