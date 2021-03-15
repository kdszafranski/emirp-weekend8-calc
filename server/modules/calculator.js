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

// require <=> export
module.exports = {
    calculate: calculate, // i'm a function
    history: history, // i'm an array
};