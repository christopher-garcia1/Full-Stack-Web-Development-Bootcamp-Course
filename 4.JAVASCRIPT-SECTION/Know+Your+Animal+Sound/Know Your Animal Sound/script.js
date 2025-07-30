
document.getElementById("soundButton").addEventListener("click", () => {
  let userInput = document.getElementById("animalInput").value.toLowerCase();
  // target p
  let p = document.getElementById("soundOutput");

  switch (userInput) {
    case "cat":
      p.innerHTML = "thats a cat! MEOW MEOW";
      break;
    case "dog":
      p.innerHTML = "thats a dog! WOOF WOOF";
      break;
    default:
      p.innerHTML = "i dont know that animal!";
      break;
  }
});
