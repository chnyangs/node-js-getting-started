const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const apiRouter = require('./routes/greeting');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


