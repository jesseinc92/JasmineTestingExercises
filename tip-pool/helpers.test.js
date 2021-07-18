describe('Helpers tests for calculateTipPercentage', function () {
    it('should test edge cases', function () {
        expect(calculateTipPercent(100, 0)).toEqual(0);
        expect(calculateTipPercent(50, 50)).toEqual(100);
    })

    it('should test various integers', function () {
        expect(calculateTipPercent(25, 3)).toEqual(12);
        expect(calculateTipPercent(67, 14)).toEqual(21);
        expect(calculateTipPercent(67, 14)).toBeInstanceOf(Number);
    })

    it('should test various decimals', function () {
        expect(calculateTipPercent(35.40, 12.34)).toEqual(35)
        expect(calculateTipPercent(40.00, 0.00)).toEqual(0)
        expect(calculateTipPercent(20.00, 20.00)).toEqual(100)
    })
})

describe('Helpers tests for sumPaymentTotal', function () {
    beforeEach(function () {
        // initialize values
        allPayments = {
            payment1: {tipAmt: 12.34, billAmt: 35.40, tipPercent: 35},
            payment2: {tipAmt: 0.00, billAmt: 40.00, tipPercent: 0},
            payment3: {tipAmt: 14, billAmt: 67, tipPercent: 21},
            payment4: {tipAmt: 20, billAmt: 20, tipPercent: 100},
        }
    })

    it('should calculate the sum of the provided payments', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(46.34)
        expect(sumPaymentTotal('billAmt')).toEqual(162.40)
        expect(sumPaymentTotal('tipPercent')).toEqual(156)
    })

    afterEach(function () {
        // tear down logic
        allPayments = {};
    })
})

describe('Helpers tests for appendTd', function () {
    beforeEach(function () {
        // initialization logic
        tr = document.createElement('tr');
        tr.id = 'payment1';
        value = 30;
    })

    it('should return child node information for td', function () {
        appendTd(tr, value);

        expect(tr.innerHTML).toBeDefined();
        expect(tr.innerText).toEqual('30');
    })

    afterEach(function () {
        tr = undefined;
        value = undefined;
    })
})

describe('Helpers test for appendRemoveBtn', function () {
    beforeEach(function () {
        // initialize a tr
        tr = document.createElement('tr');
        tr.id = 'dummy-tr';
    })

    it('elements should be nested', function () {
        appendRemoveBtn(tr);
        
        expect(tr.innerHTML).toBe('<td>X</td>');
    })

    afterEach(function () {
        tr = undefined;
    })
})