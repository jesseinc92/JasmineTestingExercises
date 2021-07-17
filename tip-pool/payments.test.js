describe('Payments test for createCurPayment()', function() {
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

    afterEach(function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
    })
  })
  
  describe('Payments test for appendPaymentTable()', function () {
    beforeEach(function () {
      // initialize curPayment
      curPayment = {
        billAmt: '40',
        tipAmt: '15.34',
        tipPercent: '38.35'
      }
    })

    it('should return defined elements for payment table', function () {
      expect(paymentTbody).toBeTruthy();
      expect(paymentTbody.childNodes.length).toEqual(1);
    })

    afterEach(function () {
      curPayment = {};
    })
  })

  describe('Payments test for updateSummary()', function () {
    beforeEach(function () {
      // initialize payment information
      allPayments = {
        payment1: {tipAmt: 12.34, billAmt: 35.40, tipPercent: 35},
        payment2: {tipAmt: 0.00, billAmt: 40.00, tipPercent: 0},
        payment3: {tipAmt: 14, billAmt: 67, tipPercent: 21},
        payment4: {tipAmt: 20, billAmt: 20, tipPercent: 100},
      }
    })

    it('should calculate the average of the percentage', function () {
      updateSummary();

      expect(summaryTds[0].innerHTML).toEqual('$162.4');
      expect(summaryTds[1].innerHTML).toEqual('$46.34');
      expect(summaryTds[2].innerHTML).toEqual('39%');
      expect(summaryTds.length).toEqual(3);
    })

    afterEach(function () {
      // tear down to clear DOM
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
    })
  })

  describe('Payments tests for submitPaymentInfo', function () {
    beforeEach(function () {
      curPayment = {
        billAmt: '40',
        tipAmt: '15.34',
        tipPercent: '38.35'
      }
    })

    it('should have assigned values in variables', function () {
      expect(curPayment).toBeDefined();
      expect(curPayment).toBeTruthy();
      expect(billAmtInput.value).toEqual('');
      expect(tipAmtInput.value).toEqual('');
    })

    afterEach(function () {
      curPayment = {};
    })
  })