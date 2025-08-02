document.addEventListener("DOMContentLoaded", () => {
  // element selection
  // input
  const inputEl = document.getElementById("amount");
  const interestEl = document.getElementById("interest");
  const loanEl = document.getElementById("years");

  // button
  const btn = document.getElementById("calculateBtn");

  // output

  const resultMonthly = document.getElementById("monthly");
  const resultPayment = document.getElementById("total");
  const resultInterest = document.getElementById("totalInterest");

  const calculateLoan = () => {
    const principal = parseFloat(inputEl.value);
    const interest = parseFloat(interestEl.value) / 100 / 12;
    const payment = parseFloat(loanEl.value) * 12;

    if (isNaN(principal) || isNaN(interest) || isNaN(payment)) {
      alert("Please enter valid numbers!");
      return;
    }

    // calc monthly payment
    const x = Math.pow(1 + interest, payment);
    const monthly = (principal * x * interest) / (x - 1);

    //  calc total payment
    if (isFinite(monthly)) {
      const total = monthly * payment;
      const totalInterest = total - principal;
      // display result
      resultMonthly.textContent = monthly;
      resultPayment.textContent = total;
      resultInterest.textContent = totalInterest;
      animateValue(resultMonthly, 0, monthly, 1000);
      animateValue(resultPayment, 0, total, 1000);
      animateValue(resultInterest, 0, totalInterest, 1000);
    }
  };

  const animateValue = (element, start, end, duration) => {
    const startTime = performance.now();
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  // event listner for button
  btn.addEventListener("click", calculateLoan);
});
