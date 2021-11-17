const express = require('express');
const engines = require('consolidate');

const app = express();
const PORT = 3000;

app.set('views', `${__dirname}/template`);
app.engine('hbs', engines.handlebars);
app.set('view engine', 'hbs');

app.use('/', express.static('./dist'));
app.use('/auth', express.static('./dist'));
app.use('/login', express.static('./dist'));

app.use('/500', (req, res) => {
  res.status(500).render('5xx.hbs', {});
});

app.use((req, res) => {
  res.status(404).render('404.hbs');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
