const express = require('express');
const app = express();
const PORT = 5000;

// serve static files
app.use(express.static('server/public'));

// new calculations
app.post('/calculate', (req, res) => {
    console.log('in POST');

    // everything's cool
    res.sendStatus(200);    
});

app.listen(PORT, ()=> {
    console.log('hey, ready on port: ', PORT);
});