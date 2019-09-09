class Calculator {
    constructor(){
        
    };

    calculatorAdd(a,b,c) {
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            throw new Error(`One of the inputs is NOT a number!`);
        }
        return a+b+c;
    };

    calculatorMultiply(a,b,c) {
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            throw new Error(`One of the inputs is NOT a number!`);
        }
        return a*b*c;
    };
};

module.exports = Calculator;

