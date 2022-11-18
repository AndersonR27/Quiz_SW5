const cors = require("cors");
const express = require('express');
const morgan = require('morgan');
const app = express();
const equipos_routes = require("./routes/equipos_routes");

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api', equipos_routes);

module.exports = app;