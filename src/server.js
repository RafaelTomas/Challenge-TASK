const express = require('express')
const cors = require('cors')
const router = require('./app/router/')

require('./app/database');

const app = express();

app.use(cors())
app.use(express.json())

router(app);

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server is runnig ${port}`));