const validator = require("express-validator")

const createCustomer = [
    validator.body("firstName", "First Name is required").isString().isLength({ min: 3 }),
    validator.body("lastName", "Last Name is required").isString().isLength({ min: 3 }),
    validator.body("email", "Email is required").isString(),
    validator.body("password", "Password is required")
    .isLength({min: 8}).withMessage("Password must be at least 8 characters long")
    .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("Password must contain at least one special character"),
    // validator.body("confirmPassword", "Confirm Password is required").custom((value, { req }) => {
    //     if (value !== req.body.password) {
    //         throw new Error("Confirm Password must match Password");
    //     }
    //     return true;
    // }),
    validator.body("addressString", "Address is required").isString(),
    validator.body("coordiantes").isArray().withMessage("Invalid coordinates"),
    validator.body("phoneNumber", "Phone is required").isString(),
    validator.body("sex", "Sex is required").isIn(["male", "female"]),
    validator.body("profilePictureURL", "Profile Picture URL is required to be URL")
    .optional().isURL(),
]

const loginCustomer = [
    validator.body("email", "Email is required").isEmail(), 
    validator.body("password", "Password is required").isString().isLength({min: 8}),
]

const AddAddress = [
    validator.body("name").isString().withMessage("Address name is required"),
    validator.body("coordinates").isArray().custom((value, { req }) => {
        if (!Array.isArray(value) || value.length !== 2) {
            throw new Error("Invalid coordinates");
        }
        return true;
    }),
]



module.exports = {createCustomer, loginCustomer}

