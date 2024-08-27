const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const customerRouter = require("./routers/customerRouter")
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port = config.port || 3000;

app.get("/", (req, res) => {
    res.send("Hello, Talabat Mock!");
})

app.use("/customer", customerRouter);

app.use((req, res, next) => {
    res.status(404).json(jsend.error({ message: "Not found", code: 404 }));
  });

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
})