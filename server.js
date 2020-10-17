const express = require("express");
// const mongoose = require('mongoose')
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 1437;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
