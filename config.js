require("dotenv").config();

module.exports = {
    DB_URL: process.env.DATABASE_URL,
    SECRET: process.env.SECRET,
    PORT: process.env.PORT || 8080,
};
