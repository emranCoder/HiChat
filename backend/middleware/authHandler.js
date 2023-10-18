const { tokenVerify } = require('../config/utility');


const authCheck = async (req, res, next) => {
    const header = req.headers.token;
    const auth = await tokenVerify(header);
    const expToken = auth.exp;
    console.log(expToken);
    if (!auth || !expToken) {
        return res.status(404).send({
            err: "False Attempted!",
        });
    }
    next();
}


module.exports = authCheck;