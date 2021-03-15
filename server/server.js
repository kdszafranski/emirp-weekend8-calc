const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

// serve static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));


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
    console.log('calculation complete: ', calcDetails);

}


// new calculations
app.post('/calculate', (req, res) => {
    console.log('in POST:', req.body);

    calculate(req.body);

    // respond!
    res.sendStatus(200); // everything's cool   
});

app.listen(PORT, ()=> {
    console.log('hey, ready on port: ', PORT);
});