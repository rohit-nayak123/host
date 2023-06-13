const expres = require("express");
const path = require("path");
const app = expres();

app.get("/api/test", (req, res) => {
  res.send("all done");
});

app.get("/", (req, res) => {
  res.send("go to hell");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
