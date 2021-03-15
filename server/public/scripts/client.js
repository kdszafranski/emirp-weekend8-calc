// check jQuery works
$(document).ready( start );

function start() {
    console.log('DOM is ready');
    // event listeners, event handlers (the function called)
    $('#submitCalculation').on('click', submitCalculation);

    getHistory();
}


function getHistory() {
    // make ajax to get full history array from the server
    $.ajax({
        type: 'GET',
        url: '/history',        
    })
    .then( function(response) {
        console.log('history: ', response);
        // answer is the last index of the array
        renderAnswer( response[response.length - 1] );

    })
    .catch( function(error) {
        console.log('error on GET: ', error);            
    })
}

// update just the answer span
function renderAnswer(answer) {
    $('#answer').text(answer.answer);
}

function renderHistory() {

}


function submitCalculation( ){
    console.log('clicked submit');

    // get input values
    // get operation
    // package these up
    const newCalculation = {
        xInput: $('#xInput').val(),
        yInput: $('#yInput').val(),
        operator: $('#operator').val(),
    };

    console.log('new calc: ', newCalculation);

    // send to the server
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: newCalculation, // becomes req.body on the server
    })
    .then( function(response) {
        console.log('everything is fine.');
    })
    .catch( function(error) {
        console.log('error on POST: ', error);            
    })
    
}
