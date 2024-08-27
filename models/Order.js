const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    date : { type : Date, default: Date.now },

    totalPrice : { type : Number, default: 0 },

    status : { type : String, enum : ["pending", "completed", "cancelled"] },

    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    },

    driver : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    },

    deleveryTime : { type : Date },
    },
    {timestamps: true},
);

module.exports = mongoose.model("Order", orderSchema)