const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    firstName: { type : String, required: true },
    lastName: { type : String, required: true },
    age: { type : Number, required: true },
    Vecile: { type : String, required: true },
    nationalId: { type : String, required: true },
    Salary: { type : Number, required: true },
    phoneNumber: { type : String, required: true },
    profilePictureURL: { type : String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }]
});

module.exports = mongoose.model("Driver", driverSchema)