const express = require('express');

const app = express();
const PORT = 3000;

const expressStatic = express.static('dist')

app.use(expressStatic);
app.use('*', expressStatic);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
