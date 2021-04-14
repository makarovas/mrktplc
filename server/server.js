import express from "express";
import { readdirSync } from "fs";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

app.listen(PORT, () => console.log(`run on ${PORT}`));

module.exports = {
  express,
};
