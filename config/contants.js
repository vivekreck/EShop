const dotenv = require("dotenv");
dotenv.config();

exports.constants = {
    MONGODB_URI: process.env.MONGODB_URI,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
    EMAIL: process.env.EMAIL,
    SESSION_SECRET: process.env.SESSION_SECRET,
    PORT: process.env.PORT
}