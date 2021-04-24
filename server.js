// Import all packages
const { DB_URL, PORT, SECRET } = require("./config");
const express = require("express");
const router = require("./router");
const cors = require("cors");
const mongoose = require("mongoose");

// Init App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", router);

// Connect to DB
(async function () {
    try {
        await mongoose.connect(DB_URL, {
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to Database!`);
    } catch (error) {
        console.error(error);
    }
})();

// Run App
app.listen(PORT, () => {
    console.log(`Server up on PORT ${PORT}`);
});
