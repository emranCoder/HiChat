const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const createHttpError = require('http-errors');

const userValidates = [
    // Validation checks using express-validator
    check('fname', 'First name is required').not().isEmpty().isAlpha("en-US", { ignore: " " }),
    check('lname', 'Last name is required').not().isEmpty().isAlpha("en-US", { ignore: " " }),
    check('email', 'Invalid email format').isEmail().trim().custom(async (data) => {
        try {
            const user = User.find({ email: data });
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
                    throw createError("Number already is use!");
                }
            } catch (error) {
                throw createError(error.message);
            }
        }),
    check('password', 'Password must be strong 8 character, mix with upper case, lowercase & with number').isStrongPassword(),
    check('dateOfBirth', 'Invalid date of birth').isISO8601().toDate(),
];

module.exports = { userValidates };