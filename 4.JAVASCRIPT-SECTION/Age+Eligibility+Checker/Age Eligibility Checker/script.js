//! =====Age Checker====
//Create a project that takes in a user's age and checks if they are eligible to vote, drink, or drive, displaying different messages accordingly.

const eligibility = document.getElementById("checkButton");

eligibility.addEventListener("click", () => {
  const ageEl = parseInt(document.getElementById("ageInput").value);
  let result = document.getElementById("result");
  result.innerHTML = "";
  
  if (isNaN(ageEl) || ageEl < 0 ) {
    alert('Please input your age') 
    return
  }


  if (ageEl >= 21) {
    result.innerHTML += "You are old enough to drink </br>";
  } else {
    result.innerHTML += "You are not old enough to drink </br>";
  }

  if (ageEl >= 18) {
    result.innerHTML += "You are old enough to vote </br>";
  } else {
    result.innerHTML += "You are not old enough to vote </br>";
  }

  if (ageEl >= 16) {
    result.innerHTML += "You are old enough to drive </br>";
  } else {
    result.innerHTML += "You are not old enough to drive </br>";
  }

});
