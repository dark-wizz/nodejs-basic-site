const path = require("path");
const exp = require("express");
const app = exp();

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});
app.get("*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, req.path), (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "404.html"));
    }
  });
});
app.listen(8080, () => console.log("running..."));
