//Check if the clicked element is a list item
const deleteEl = (x) => {
  document.querySelector(`[data-item = '${x}']`)?.remove();
};

document.getElementById("itemList").addEventListener("click", (event) => {
  const clickedEl = event.target;
  const itemNumber = clickedEl.dataset.item;

  if (clickedEl.tagName === "LI") {
    itemNumber === "delete"
      ? deleteEl(itemNumber)
      : console.log(`You clicked item ${itemNumber}`);
  }
});
