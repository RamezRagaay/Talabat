const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    // TODO: Add coordinate validation
    name: {
        type: String,
        required: true
    },
    location : {
        type: {type: String, default: "Point"},
        coordinates: {
            type: [Number],
            default: [0,0],
            // validate: {
            //     validator: function(v) {
            //         return v.length === 2;
            //     },
            //     message: "Invalid coordinates"
            // }
        },
        // validate: {
        //     validator: function(v) {
        //         return v.coordinates === 2;
        //     },
        //     message: "Invalid coordinates"
        // }
    }

});

module.exports = mongoose.model("Address", addressSchema)