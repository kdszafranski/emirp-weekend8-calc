let history = [];

// make calculation
function calculate(calcDetails) {
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

    console.log('this had NaN!', calcDetails);

    // store calculation only if it is a number
    if(isNaN(calcDetails.answer)) {      
        // Not a Number  
        return false;
    } else {
        // is a number!
        history.push(calcDetails);
        console.log('full history: ', history);

        return true;
    }
    
    
}

// require <=> export
module.exports = {
    calculate: calculate, // i'm a function
    history: history, // i'm an array
};