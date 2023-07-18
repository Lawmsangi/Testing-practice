const newCalculator= require('./calculator.js')

  describe('test calculator', () => {
    it('will add two numbers', () => {
      expect(newCalculator.add(6,2)).toEqual(8);
    });
    it('will add two numbers', () => {
      expect(newCalculator.add(2.4,4.1)).toEqual(6.5);
    });
    it('will add two numbers', () => {
      expect(newCalculator.add(1000,0.5)).toEqual(1000.5);
    });
    it('will subtract two numbers', () => {
      expect(newCalculator.subtract(13,5)).toEqual(8);
    });
    it('will subtract two numbers', () => {
      expect(newCalculator.subtract(1,8)).toEqual(-7);
    });
    it('will subtract two numbers', () => {
      expect(newCalculator.subtract(0.55,0.75)).toEqual(-0.20);
    });
    it('will divide two numbers', () => {
      expect(newCalculator.divide(8,2)).toEqual(4);
    });
    it('will divide two numbers', () => {
      expect(newCalculator.divide(5,10)).toEqual(0.5);
    });
    it('will divide two numbers', () => {
      expect(newCalculator.divide(33,3)).toEqual(11);
    });
    it('will multiply two numbers', () => {
      expect(newCalculator.multiply(5,2)).toEqual(10);
    });
    it('will multiply two numbers', () => {
      expect(newCalculator.multiply(5.2,2.5)).toEqual(13);
    });
    it('will multiply two numbers', () => {
      expect(newCalculator.multiply(0.5, 0.005)).toEqual(0.0025);
    });
  });