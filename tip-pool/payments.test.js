describe('Helpers test for createCurPayment()', function() {
    it('should return null with empty string input in creatCurPayment()', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
  
      expect(createCurPayment()).toBeFalsy()
    })
  
    it('should not calculate tip percentage in createCurPayment()', function () {
      billAmtInput.value = 0;
      tipAmtInput.value = 0;
  
      expect(createCurPayment()).toBeFalsy()
    })
  
    it('should calculate the tip percentage to be zero in createCurPayment()', function () {
      billAmtInput.value = 10;
      tipAmtInput.value = 0;
  
      expect(createCurPayment()).toBeTruthy()
    })
    
  })
  
  describe('Helpers test for appendPaymentTable()', function () {
    
  })