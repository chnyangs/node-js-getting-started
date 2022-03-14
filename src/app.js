const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5000
const apiRouter = require('./routes/api');
const viewRouter = require('./routes/views');

const app = express();
// view engine setup
// view engine setup
const viewPath = path.join(__dirname, '../public/template/views');
app.set('views', viewPath);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', viewRouter);
app.use('/api', apiRouter);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


