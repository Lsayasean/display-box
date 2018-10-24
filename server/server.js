const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

infoFromDB = [
  {
    name: "Tbone",
    color: "blue",
    height: "60px",
    width: "60px",
    img: null
  },
  {
    name: "Sarah",
    color: "pink",
    height: "100px",
    width: "100px",
    img: null
  },
  {
    name: "T-Rex",
    color: "green",
    height: "500px",
    width: "500px",
    img: null
  }
];

app.get("/get-info", (req, res) => {
  res.status(200).send(infoFromDB);
});

app.put("/change-color", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
  infoFromDB.map((val, i, arr) => {
    if (val.name === req.body.name) val.color = req.body.color;
    return val;
  });
  res.status(200).send(infoFromDB);
});

app.listen(3535, () => console.log("listening on 3535"));
