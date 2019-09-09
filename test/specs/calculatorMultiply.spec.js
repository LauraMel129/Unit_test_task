const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('calculatorAdd', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'calculatorMultiply');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 216 when added with numbers 3,8,9', function() {
        expect(calculator.calculatorMultiply(3,8,9)).to.be.equal(216);
    });

    it('should return -216 when added with negative number -9', function() {
        expect(calculator.calculatorMultiply(3,-9,8)).to.be.equal(-216);
    });

    it('should throw an error if one of the inputs is text', function() {
        let callWithError = () => calculator.calculatorMultiply("text");
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`One of the inputs is NOT a number!`);
    });
});