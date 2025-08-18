//Using textContent to update the blog title
const title = document.getElementById("title");
title.textContent = "New Blog Title";
title.style.background = "red";
title.style.color = "white";

//change the background

//Using innerHTML to add another paragraph with some HTML content
const paragraphEl = document.getElementById("paragraph");

paragraphEl.innerHTML = "<h1>I have changed the paragraph</h1>";
paragraphEl.innerHTML +=
  "<br> <strong> This is a new paragraph text with strong formatting</strong>";

// Using innerText to modify the comment section (assume the original comment is visible)

document.querySelector(".commentText").innerText = "hi";
