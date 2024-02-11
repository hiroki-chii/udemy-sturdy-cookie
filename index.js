const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser("mysecret"));
app.get("/greet", (req, res) => {
  const { name = "anonymous" } = req.cookies;
  res.send(`ようこそ ${name} さん`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "yamadataro");
  res.cookie("animal", "cat");
  res.send("クッキーを送ったよ");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruits", "grape", { signed: true });
  res.send("署名付きクッキーを返しました。");
});

app.get("/verifyfruits", (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);

  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log("待受中...");
});
