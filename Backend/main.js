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

var cors = require('cors')

app.use(cors());

app.get('/listUser', function (req, res) {
    con.query('Select u.nutzerid, u.name, u.geburtsdatum, u.passwort, u.einkommen, b.auto, b.wohnen, b.freizeit, b.essen, b.sparen, b.sonstiges from user u inner join budget b on b.nutzerid = u.nutzerid').then(rows => {
        res.send(rows)
    });
})

app.get('/listBetraege', function (req, res) {
    con.query('Select Datum, budgettype, betrag, nutzerid, beschreibung from umsaetze').then(rows => {
        res.send(rows)
    });
})

app.put('/addAusgabe', function (req, res) {
    console.log(req.query);
    res.send({value: 'Done'})
})

var server = app.listen(1234, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
