// Select the list element with id "cherry"
const cherryEl = document.getElementById('cherry')
// Select the previous sibling element of "cherry" (should be "banana")
const prevEl = cherryEl.previousElementSibling


// Select the next sibling element of "cherry" (should be "date")
const nextEl = cherryEl.nextElementSibling 

console.log(cherryEl,prevEl,nextEl);
