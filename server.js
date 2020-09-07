const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 4200;
require('./hbs/helpers');

app.use(express.static( __dirname + '/public'));


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
   res.render('home', {
       name: 'camilo rivera',
       year: new Date().getFullYear()
   });
});

app.get('/about', (req, res) => {

    res.render('about', {
        year: new Date().getFullYear()
    });
 });

app.get('/data', (req, res) => {
   res.send('hello') 
});

app.listen(port, () => {
    console.log(`listen on port ${port}`)   
});