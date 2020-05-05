const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.use(express.static("./src/public"));

app.post("/profile", upload.single("avatar"), (req, res) => {
  console.log(`req.file`, req.file);
  res.redirect("/");
});

app.listen(8080, () => console.log("Listening on port 8080"));
