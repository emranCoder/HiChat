const { tokenVerify } = require('../config/utility');
const User = require('../models/User');


const authCheck = async (req, res, next) => {
    const header = req.headers.token;
    if (!header) {
        return res.status(500).send({
            err: "False Attempted!",
        });
    }
    const auth = await tokenVerify(header);
    const authExp = auth.exp;
    if (!authExp || !auth) {
        return res.status(404).send({
            err: "Please! Login to continue ",
        });
    }
    const id = (auth.token.split("_")[1] === req.params.id) ? auth.token.split("_")[1] : false;
    const user = await User.findById(id).select('auth ');
    const uToken = user.auth[0].token
    const userAuth = await tokenVerify(uToken);
    const uAuthExp = userAuth.exp;
    if (!uAuthExp || !userAuth) {
        return res.status(404).send({
            err: "Please! Login to continue",
        });
    }
    const uId = (userAuth.token.split("_")[1] === req.params.id) ? userAuth.token.split("_")[1] : false;
    if (!userAuth) {
        return res.status(404).send({
            err: "Please! Login to continue",
        });
    }

    if (!auth || !authExp || !uAuthExp || !uId || !uToken || !user) {
        return res.status(500).send({
            err: "False Attempted!",
        });
    }


    req.uID = id;
    next();
}


module.exports = authCheck;