function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function validIp(str) {
    if(str.length < 14) {
        str === false;
    } else(str.value < 255) {
        str === false;
    }
}



module.exports = {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide, 
    validIp: validIp,
};

