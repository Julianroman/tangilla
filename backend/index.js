const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const {sequelize} = require('./utils/db.utils');
const ParserRoutes = require('./routes/parser.route');

const multer = require("multer");
require('dotenv').config();

global.__basedir = __dirname;

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());
app.use(multer().array());
app.use(express.static('public'));

// Connect to database
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((e) => console.log(e));

//Routes
app.use('/parse', ParserRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
