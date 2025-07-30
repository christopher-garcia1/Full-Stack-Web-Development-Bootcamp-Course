let countdownRunning = false;
const startCountDown = () => {
  if (countdownRunning) return;
  const timeInput = document.getElementById("timeInput").value;
  const timerDisplay = document.getElementById("timer");
  const timeRemaining = parseInt(timeInput);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    timerDisplay.textContent = "Please input number greater than 0";
    return;
  }

  countdownRunning = true;

  for (let i = timeRemaining; i >= 0; i--) {
    (function (count) {
      setTimeout(() => {
        if (count > 0) {
          timerDisplay.textContent = `Time Left: ${count} seconds`;
        } else {
          timerDisplay.textContent = "Times Up!";
          countdownRunning = false;
        }
      }, (timeRemaining - count) * 1000);
    })(i);
  }
};

document.getElementById("startBtn").addEventListener("click", startCountDown);
