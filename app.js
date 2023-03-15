const express = require('express')
const ejs = require('ejs')
const path = require('path')
const port = 3000
const app = express()

app.set("view engine", "ejs")

//Middlewares
app.use(express.static('public'))

//Routes
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/add', (req, res) => {
    res.render('add')
})

app.listen(port, () => {
    console.log(`Sunucu : ${port} başladı!`)
})