const allEls = document
  .querySelectorAll(".accordion-header")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const accordionItem = button.parentElement;
      const accordionContent = button.nextElementSibling;
      //   get current content
      const contentHeight =
        accordionContent.querySelector(".accordion-body").offsetHeight;
      if (accordionItem.classList.contains("active")) {
        // close it
        accordionContent.style.maxHeight = "0px";
        accordionItem.classList.remove("active");
        accordionContent.classList.remove("active");
      } else {
        // close any open items
        document
          .querySelectorAll("accordion-item.active")
          .forEach((activeItem) => {
            activeItem.classList.remove("active");
            activeItem.querySelector("accordion-content").style = "0px";
            activeItem
              .querySelector("accordion-content")
              .classList.remove("active");
          });
          accordionContent.style.maxHeight = contentHeight + 'px'
          accordionItem.classList.add('active')
          accordionContent.classList.add('active')
      }
    });
  });
