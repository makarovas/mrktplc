import express from "express";
import { readdirSync } from "fs";
import mongoose from "mongoose";
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(morgan("dev"));

// connect DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useCreateIndex: true
  })
  .then(()=> console.log('DB Conneceted'))
  .catch(()=> console.log('Error'))

// route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

app.listen(PORT, () => console.log(`run on ${PORT}`));

//export
module.exports = {
  express,
};
