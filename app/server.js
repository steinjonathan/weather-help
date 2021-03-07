
const express = require('express')
const db = require('./datasource/postgres')
const dotenv = require('dotenv')
const routes = require('./routes')

const app = express()

routes.configure(app)

app.listen(3000, _ => {
    console.log('App listening on port :3000')
    dotenv.config()
    db.authenticate().then(() => console.log('Postgre Connected Succesfuly'))
})



