const express = require('express')
const routes = require('./app/Router/')
require('./app/database');

const app = express();

app.use(express.json())
app.use(routes);

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server is runnig ${port}`));