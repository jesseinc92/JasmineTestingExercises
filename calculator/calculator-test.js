
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 30000,
    years: 5,
    rate: 5 / 100
  }
  expect(calculateMonthlyPayment(values)).toEqual('566.14')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 2,
    rate: 3 / 100
  }
  expect(calculateMonthlyPayment(values)).toEqual('429.81')
  expect(calculateMonthlyPayment(values)).not.toBeCloseTo('429.815', 3)
});

/// etc
