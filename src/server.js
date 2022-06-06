const express = require('express');
const cors = require('cors');
const router = require('./app/router/');

require('./app/database');

const app = express();

app
  .use(cors())
  .use(express.json());


router(app);

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server is runnig ${port}`));