/**
 * Created by GAELMP on 26/08/2017.
 */
var express = require('express');
var bodyParser = require('body-parser'); //npm install
var app = express();//creation d'une instance express
var data=require('./data/data.json');
const ds = require('fs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//marchera que sile server est lance a partir du dossier parent du client/
//donc faire node server/app.js
app.use(express.static('client/'));

app.get('/countries', function (req, res) {
    console.log('traitement requette GET ...');

    res.send(data.countries);
});

app.post('/countries', function (req, res) {
    console.log('Traitement requette POST ...');
   // var data=require('./data/data.json');

    this.countries={};
    this.countries=data.countries;
    this.countries.push(req.body);
    this.data={};
    this.data['countries']=countries;
    const f = ds.openSync('Serveur/data/data.json', 'w');
    ds.writeFileSync(f, JSON.stringify(data))

    res.json(data.countries);
});

app.put('/countries/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    //var data = require('./data/data.json');

    this.countries = {};
    this.countries = data.countries;
    this.countries.splice(req.params.id, 1, req.body);
    this.data = {};
    this.data['countries'] = countries;
    const f = ds.openSync('server/data/data.json', 'w');
    ds.writeFileSync(f, JSON.stringify(data))

    res.json(/*{ body: req.body, id: req.params.id }*/data.countries);
});

app.delete('/countries/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
   // var data = require('./data/data.json');

    this.countries = {};
    this.countries = data.countries;
    this.countries.splice(req.params.id, 1);
    this.data = {};
    this.data['countries'] = countries;
    const f = ds.openSync('server/data/data.json', 'w');
    ds.writeFileSync(f, JSON.stringify(data))
    res.send(/*req.params.id*/data.countries);
});

app.listen(3005,() => {
    console.log('le serveur tourne sur le port 3005');
});

