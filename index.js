const express = require("express");
const app = express();
let PORT = process.env.PORT || 80;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const { imgbox } = require("imgbox");
const fs = require("fs");

app.post("/", async (req, ress) => {
  var ID = req.body.ID;
  await imgbox(
    "https://drive.google.com/uc?id=" + ID + "&export=download"
  ).then((res) => ress.send(res["files"][0]["original_url"]));
});

app.listen(PORT, () => {
  console.log(`listening on post http://localhost:${PORT}/Login`);
});
