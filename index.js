const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/:page", express.static(__dirname + "/public"));

const server = app.listen(process.env.PORT || 3000);
server.on("listening", () => console.log(`Server listening on ${process.env.PORT || 3000}`));
