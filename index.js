const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = 8080;
app.set("view engine", "pug");
app.set("views", path.join(__dirname));


app.listen(port, () => {
console.log('listening for request on port 8080');
});

router.get('/health', (req, res) => {
    res.sendStatus(200);
});



router.get('/',function(req,res){
    res.render("index",{ message: "Hello from " +  process.env.MY_POD_NAME + " !"  });;
});


app.use('/', router);
