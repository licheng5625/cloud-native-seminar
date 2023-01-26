const express = require("express");
const path = require("path");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();
const router = express.Router();

app.set("view engine", "pug");
app.set("views", path.join(__dirname));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

router.get("/health", (req, res) => {
  res.sendStatus(200);
});
router.get("/user", function (req, res) {
  try {
    var users = JSON.parse(fs.readFileSync("./user.json", "utf8")).users;
    res.setHeader("Content-Type", "application/json");
    if (req.query.name) {
      users = users.filter((users) => users.name === req.query.name);
    }
    res.status(200).send(JSON.stringify(users));
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.post("/user", function (req, res) {
  try {
    const users = JSON.parse(fs.readFileSync("./user.json", "utf8"));
    var name = req.body.name;
    var age = req.body.age;
    users.users.push({ name: name, age: age });
    fs.writeFileSync("./user.json", JSON.stringify(users), "utf8");

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(users));
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.get("/", function (req, res) {
  try {
    const version = fs.readFileSync("./VERSION", "utf8");
    res.status(200).render("index", {
      message: "Current version is " + version + " !",
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
});

app.use("/", router);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
