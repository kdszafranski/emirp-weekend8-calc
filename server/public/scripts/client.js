// check jQuery works
$(document).ready( start );

function start() {
    console.log('DOM is ready');
    // event listeners, event handlers (the function called)
    $('#submitCalculation').on('click', submitCalculation);
    $('#clearInputs').on('click', clearInputs);

    getHistory();
    focusInput();
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

        // display all the history
        renderHistory(response);

    })
    .catch( function(error) {
        console.log('error on GET: ', error);            
    })
}

// update just the answer span
function renderAnswer(answer) {
    // only try to use if there is a newest answer
    console.log(answer);

    // if the answer is truthy, show it
    if(answer) {
        $('#answer').text(answer.answer);
    }
    
}

// displays entire history
function renderHistory(history) {
    // wipe the dom
    $('#historyList').empty();

    // append on the dom in a loop
    for(let calc of history) {
        // prepend = last if first, etc
        $('#historyList').prepend(`
            <li>${calc.xInput} ${calc.operator} ${calc.yInput} = ${calc.answer}</li>
        `);
    }
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
        getHistory(); // refresh my history data
    })
    .catch( function(error) {
        console.log('error on POST: ', error);
        // tell the user
        alert('hey, i need 2 numbers!');
    })
    
}

function clearInputs() {
    // clear the inputs
    $('input').val('');
    // clear select
    $('#operator').prop('selectedIndex', 0);

    // focus
    focusInput();
}

function focusInput() {
    $('#xInput').focus();
}
