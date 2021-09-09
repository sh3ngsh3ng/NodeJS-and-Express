// import express
const express = require('express')
const app = express()
// static file with express
app.use(express.static('public'))

// import hbs
const hbs = require('hbs')
// set-up view engine
app.set('view engine', 'hbs')

// import wax
const wax = require('wax-on')
// setup wax-on for hbs
wax.setLayoutPath('./views/layouts')


// routes
app.get('/', function(req,res) {
    res.render('01-landingpage')
})


// set-up server
app.listen(3000, function() {
    console.log("Server Started")
})




