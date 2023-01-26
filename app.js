const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();
const router = express.Router();

app.set("view engine", "pug");
app.set("views", path.join(__dirname));


router.get('/health', (req, res) => {
    res.sendStatus(200);
});



router.get('/', function (req, res) {
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

app.use('/', router);
module.exports = app;
