const express = require("express");
const app = express();
const compression = require("compression");

const largeObject = [];
for (let i = 0; i < 50000; i++) {
  largeObject.push({
    name: "name",
    address: "address",
  });
}

app.use(compression());
app.get("/", (request, response) => {
  response.header("Cache-Control", "public, max-age=3600");
  response.send(largeObject);
});

app.listen(3000, () => console.log("listening..."));
