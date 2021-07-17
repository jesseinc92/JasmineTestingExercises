window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value / 100),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.querySelector('#loan-amount');
  const loanYears = document.querySelector('#loan-years');
  const loanRate = document.querySelector('#loan-rate');

  loanAmount.value = 20000;
  loanYears.value = 5;
  loanRate.value = 5;

  const values = {
    amount: loanAmount.value,
    years: loanYears.value,
    rate: loanRate.value / 100
  }

  let monthlyPayment = calculateMonthlyPayment(values)
  updateMonthly(monthlyPayment)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(values)
  updateMonthly(monthlyPayment)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string 1666.67
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let paymentCalc = (values.amount * (values.rate / 12)) / (1 - Math.pow((1 + (values.rate / 12)), -(values.years * 12)));
  
  return paymentCalc.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentAmount = document.querySelector('#monthly-payment');

  paymentAmount.innerHTML = monthly;
}
