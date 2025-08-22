// ! add event listener to parent div

document.getElementById("parentDiv").addEventListener(
  "click",
  (event) => {
    alert("Div clicked! Event Phase: " + event.eventPhase);
  },
  true
);

document.getElementById("list").addEventListener(
  "click",
  (event) => {
    alert("List clicked! Event Phase :" + event.eventPhase);
  },
  true
); 

document.getElementById("item1").addEventListener(
  "click",
  (event) => {
    alert("List item1 clicked! Event Phase :" + event.eventPhase);
  },
  false
);
 

document.getElementById("item2").addEventListener(
  "click",
  (event) => {
    alert("List item2 clicked! Event Phase :" + event.eventPhase);
  },
  false
);
