// check jQuery works
$(document).ready( start );

function start() {
    console.log('DOM is ready');
    // event listeners, event handlers (the function called)
    $('#submitCalculation').on('click', submitCalculation);
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
    
}
