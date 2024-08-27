const Customer = require("../models/Customer");


const createCustomer = async (firstName, lastName, email, password, phoneNumber, sex) => {
    try {
        return await Customer.create({firstName, lastName, email, password, phoneNumber, sex});
    } catch (error) {
        throw error;
    }
}

const getCustomerByEmail = async (email) => {
    try {
        return await Customer.findOne({email});
    } catch (error) {
        throw error;
    }
}

module.exports = { createCustomer, getCustomerByEmail }