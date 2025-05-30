const express = require('express');
const app = express();

//use proxy serve rto redirect the incoming request
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer({});

//redirect to the student micro-service
app.use('/student', (req, res) => {
    console.log("INSIDE API GATEWAY STUDENT ROUTE")
    proxy.web(req,res, {target:'18.205.188.62:5005'});
})

//redirect to the teacher micro-service
app.use('/teacher', (req, res) => {
    console.log("INSIDE API GATEWAY TEACHER ROUTE")
    proxy.web(req,res, {target:'44.212.62.163:5010'});
})
// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(4008, () => {
    console.log('EXPRESS Server Started at Port No: 4008')})


