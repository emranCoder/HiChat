const { tokenVerify } = require('../config/utility');


const authCheck = async (req, res, next) => {
    const header = req.headers.token;
    const auth = await tokenVerify(header);
    const expToken = auth.exp;
    if (!auth || !expToken) {
        return res.status(404).send({
            err: "False Attempted!",
        });
    }

    const id = auth.token.split("_")[1];
    req.uID = id;
    next();
}


module.exports = authCheck;