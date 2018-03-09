const express = require('express');

const app = express();

const controller = require('./controllers/');

const PORT = 3000;

app.use(controller);

app.listen(PORT, err => {
  if (err) {
    console.log(`Error:, ${err}`);
  } else {
    console.log(`SUCCESS! Server listening on port: ${PORT}`);
  }
});
