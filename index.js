const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const products_controller = require('./products_controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

console.log('linw 13', process.env.CONNECTION_STRING)

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('connected to database', process.env.CONNECTION_STRING)
}).catch(err => console.log(err));

app.post( '/api/product', products_controller.create);
app.get( '/api/product', products_controller.getAll);
app.get( '/api/product/:id', products_controller.getOne);
app.put( '/api/product/:id', products_controller.update);
app.delete( '/api/product/:id', products_controller.delete);


const PORT = 3000;
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});