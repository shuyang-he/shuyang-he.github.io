const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname + "/docs")));

app.get("*", (req, res) => {
  const indexFile = path.resolve(__dirname, "/docs/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
