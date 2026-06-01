require('dotenv').config();

const express = require('express');
const layouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(layouts);

app.set('view engine', 'ejs');
app.set('layout', 'layout');

app.use('/', authRoutes);
app.use('/', dataRoutes);

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
});