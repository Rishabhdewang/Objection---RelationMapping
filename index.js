const { Model } = require('objection');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Port = process.env.Port || 5000;
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : "localhost",
      database : "objdb",
      user : "postgres",
      password : "8085"
}
})

Model.knex(knex);

const route = require('./routes/route')
app.use('/api',route);


app.listen(Port, ()=> {
    console.log(`listening on port : ${Port}` )
});