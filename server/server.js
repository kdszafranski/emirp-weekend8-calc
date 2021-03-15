const express = require('express');
const app = express();
const PORT = 5000;

// serve static files
app.use(express.static('server/public'));

app.listen(PORT, ()=> {
    console.log('hey, ready on port: ', PORT);
});