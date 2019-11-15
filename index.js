const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("An alligator approaches!");
});

app.listen(5300, () => console.log("Krug with server start at 5300!"));
