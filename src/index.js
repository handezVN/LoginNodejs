const express = require('express')
const app = express()
const port = 3000
const path = require('path');

var exphbs  = require('express-handlebars');
const route = require('./routes');
const db = require('./config/index');

db.connect();
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.engine('hbs', exphbs({
    extname:'.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname, 'public')));
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})