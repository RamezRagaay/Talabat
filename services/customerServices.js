const Customer = require("../repos/customerRepo");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signup = async (firstName, lastName, email, password, phoneNumber, sex) => {
    try {
        const salt = await bcrypt.genSalt(5);        
        const passwordHash = await bcrypt.hash(password, salt)
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });
        const customer = await Customer.createCustomer(firstName, lastName, email, passwordHash, phoneNumber, sex);
        return { customer, token };
    } catch (error) {
        throw error;
    }
}

const login = async (email, password) => {
    try {
        const customer = await Customer.getCustomerByEmail(email);
        if (!customer) {
            throw new Error("Invalid email or password");
        }
        const passwordMatch = await bcrypt.compare(password, customer.password);
        if (!passwordMatch) {
            throw new Error("Invalid email or password");
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return { customer, token };
    } catch (error) {
        throw error;
    }
}

module.exports = { signup, login }