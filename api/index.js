const express = require('express');

const config = require('../config.js');
const user = require('./components/user/routes');

const app = express();

//Rutas
app.use('/api/user', user);

app.listen(config.api.port, () => {
  console.log(`Server is running on port: ${config.api.port}`);
});
