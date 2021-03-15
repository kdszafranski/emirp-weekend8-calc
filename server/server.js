const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

// modules
let calculator = require('./modules/calculator.js');
console.log('what is calculator?', calculator);

// serve static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));


// new calculations
app.post('/calculate', (req, res) => {
    console.log('in POST:', req.body);

    // make calcluation and store it
    if(calculator.calculate(req.body)) {
        // true
        // respond!
        res.sendStatus(201); // everything's cool   
    } else {
        // bad
        res.sendStatus(400); // bad request
    }
    

    
});

// get history
app.get('/history', (req, res) => {
    // respond with the array
    res.send(calculator.history);
});

app.listen(PORT, ()=> {
    console.log('hey, ready on port: ', PORT);
});