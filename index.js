const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const app = express();

app.use(cors());

// Enable body parser

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/openai",require("./routes/openaiRoutes"));

app.listen(PORT,()=>{
    console.log("SERVER STARTED AT 5000...." + `${PORT}`)
})