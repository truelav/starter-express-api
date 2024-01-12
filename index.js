const express = require('express')
const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })
app.use('/account', (req, res) => {
    console.log("Just got a request!")
    res.send('Account Page!')
})
app.use('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Home Page!')
})
app.listen(process.env.PORT || 3000)