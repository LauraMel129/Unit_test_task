const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('calculatorAdd', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'calculatorAdd');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 20 when added with numbers 3,8,9', function() {
        expect(calculator.calculatorAdd(3,8,9)).to.be.equal(20);
    });

    it('should return 2 when added with negative number -9', function() {
        expect(calculator.calculatorAdd(3,-9,8)).to.be.equal(2);
    });

    it('should throw an error if one of the inputs is text', function() {
        let callWithError = () => calculator.calculatorAdd("text");
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`One of the inputs is NOT a number!`);
    });
});