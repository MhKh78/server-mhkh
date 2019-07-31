const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("OK");
});
