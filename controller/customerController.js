const customerServices = require("../services/customerServices");
const { validationResult } = require("express-validator");
const jsend = require("jsend");
const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json(jsend.fail({errors: errors.array() }));
    }
    try {
        const {firstName , lastName, email, password, phoneNumber, sex} = req.body;
        
        const { customer , token } = await customerServices.signup(firstName, lastName, email, password, phoneNumber, sex);
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
        });
        res.send(jsend.success({ customer, token }));
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json(jsend.fail({errors: errors.array() }));
    }
    try {
        const {email, password} = req.body;
        const { customer , token } = await customerServices.login(email, password);
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
        });
        return res.status(200).json(jsend.success({ email, token }));
    } catch (error) {
        next(error);
    }
}

module.exports = { signup, login }