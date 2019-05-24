require('dotenv').config()
const express= require('express')
const app= express()
const ctrl= require('./controller')
const dotenv= require('dotenv')
const massive= require('massive')

const {SERVER_PORT, CONNECTION_STRING}= process.env

app.use(express.json())


massive(CONNECTION_STRING)
.then(dbInstance =>{
    app.set('db', dbInstance)
    console.log('Database, reporting for duty')
})
.catch(err=>{
    if (err) throw err;
})

app.get('/api/homes', ctrl.getAllHouses)

app.post('/api/house', ctrl.addHouse)

app.delete('/api/homes/:id')

app.listen(SERVER_PORT, ()=>{
    console.log('Servers really be like that sometimes')
})