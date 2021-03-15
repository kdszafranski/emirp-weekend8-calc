const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

// serve static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

// global array
let history = [];

function calculate(calcDetails) {
    // make calculation
    
    // if/if else/else chain
    switch(calcDetails.operator) {
        case '+': 
            console.log('hi from addition case');
            calcDetails.answer = Number(calcDetails.xInput) + Number(calcDetails.yInput);
            break;
        case '-': calcDetails.answer = Number(calcDetails.xInput) - Number(calcDetails.yInput);
            break;
        case '*': calcDetails.answer = Number(calcDetails.xInput) * Number(calcDetails.yInput);
            break;
        case '/': calcDetails.answer = Number(calcDetails.xInput) / Number(calcDetails.yInput);
            break;        
    }

    // store calculation
    history.push(calcDetails);

    console.log('full history: ', history);

}


// new calculations
app.post('/calculate', (req, res) => {
    console.log('in POST:', req.body);

    // make calcluation and store it
    calculate(req.body);

    // respond!
    res.sendStatus(201); // everything's cool   
});

// get history
app.get('/history', (req, res) => {
    // respond with the array
    res.send(history);
});

app.listen(PORT, ()=> {
    console.log('hey, ready on port: ', PORT);
});