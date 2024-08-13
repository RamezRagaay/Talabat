const dotenv = require("dotenv");

dotenv.config();

const config = {
    port: process.env.PORT,
    dbURI: process.env.MONGO_URI,
    jwtSecret: {
        secret: process.env.JWT_SECRET,
        expiration: process.env.JWT_EXPIRATION
    }
}

module.exports = config