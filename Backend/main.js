const mariadb = require('mariadb');
const db = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password: 'password',
    connectionLimit: 5,
    database: 'learn2earn'
});

var express = require('express');
var app = express();

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:8081'}));

app.get('/listUsers', function (req, res) {
    res.send({text: 'Es hat funktioniert!'});
})

var server = app.listen(1234, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
