// target outputs
const tip = document.getElementById("tipAmount");
const perPerson = document.getElementById("perPerson");
const totalBill = document.getElementById("totalAmount");
const tipPerPerson = document.getElementById("tipPerPerson");

// calculate the tip function
const calculateTip = () => {
  // target inputs

  const bill = parseFloat(document.getElementById("bill").value);
  const rating = parseFloat(document.getElementById("service").value);
  const people = parseInt(document.getElementById("people").value);

  // calculations
  const tipResult = bill * rating;
  const billResult = bill + tipResult;
  const perPersonResult = billResult / people;
  const tipPerPersonResult = tipResult / people;

  // secure valid inputs
  if (isNaN(bill) || isNaN(rating) || isNaN(people) || people <= 0) {
    alert("Please enter valid numbers and ensure people > 0");
    return;
  }

  //   display results
  tip.innerText = `$${tipResult.toFixed(2)}`;
  totalBill.innerText = `$${billResult.toFixed(2)}`;
  perPerson.innerText = `$${perPersonResult.toFixed(2)}`;
  tipPerPerson.innerText = `$${tipPerPersonResult.toFixed(2)}`;
};
