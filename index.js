const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("*", (req, res) => {
  if (req.statusCode === 200) {
    res.status(200).send(path(resolve(__dirname, "/public/index.html")));
  } else {
    res.status(500).send("Server Error.");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
