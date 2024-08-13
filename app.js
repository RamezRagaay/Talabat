const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
const port = config.port || 3000;

app.get("/", (req, res) => {
    res.send("Hello, Talabat Mock!");
})

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
})