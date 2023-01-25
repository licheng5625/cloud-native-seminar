const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require("fs");

const port = 8080;
app.set("view engine", "pug");
app.set("views", path.join(__dirname));


app.listen(port, () => {
console.log('listening for request on port 8080');
});

router.get('/health', (req, res) => {
    res.sendStatus(200);
});



router.get('/', function (req, res) {
    try {
      const version = fs.readFileSync("./VERSION", "utf8");
      res.render("index", {
        message: "Current version is " + version + " !",
      });
    } catch (err) {
        console.error(err);
        res.sendStatus(401);
    }

    
});


app.use('/', router);
