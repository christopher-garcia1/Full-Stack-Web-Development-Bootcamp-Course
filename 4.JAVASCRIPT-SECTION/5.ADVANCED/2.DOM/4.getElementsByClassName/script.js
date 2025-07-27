// get elements by class name

const fictionBooks = document.getElementsByClassName('fiction')

console.log(fictionBooks);

const nonFictionBooksEl= document.getElementById('nonFictionSection')
console.log(nonFictionBooksEl); 
const nonFictionBooksInSectionEl = nonFictionBooksEl.getElementsByClassName('non-fiction') 

console.log(nonFictionBooksInSectionEl);
console.log(nonFictionBooksInSectionEl[0]);

// loop through the html collection

const fictionBooksElArr = Array.from(fictionBooks)

console.log(fictionBooksElArr);

const fictionBooksElTitile = fictionBooksElArr.map(el => el.innerHTML) 

console.log(fictionBooksElTitile);
