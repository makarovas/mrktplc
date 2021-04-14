const express = require("express");
const app = express();
const PORT = 8000;
app.get("/api/:message", (req, res) => {
  res.status(200).send(req.params.message);
});

app.listen(PORT, () => console.log(`run on ${PORT}`));

module.exports = {
  express,
};
