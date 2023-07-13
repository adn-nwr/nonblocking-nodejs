const express = require("express");
const { fork } = require("child_process");

const app = express();

app.get("/", (req, res) => {
  const childProcess = fork("./isprime.js");
  childProcess.send({ number: parseInt(req.query.number) });
  childProcess.on("message", (message) => res.send(message));
});

app.listen(8383, () => console.log(`Listening on 8383`));
