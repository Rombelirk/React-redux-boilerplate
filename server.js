let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
console.log('Server is running on port 3000');