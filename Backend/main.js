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

var con;
db.getConnection().then(value => con = value)

app.get('/listUser', function (req, res) {
    con.query('Select id, name from user right join budget b on b.nutzer-id = id').then(rows => {
        res.send(rows)
    });
})

app.get('/listIncome', function (req, res) {
    let test = {};
    con.query('Select nutzer-id, auto, wohnen, freizeit, essen, sparen from budget').then(rows => {
        res.send(rows)
    });
})

var server = app.listen(1234, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
