//Using setAttribute to change product images
const images = document.getElementById('product1').querySelector('img') 
images.setAttribute('src', 'https://cdn.pixabay.com/photo/2024/08/30/10/14/cat-9009011_640.jpg')
 
images.setAttribute('alt', 'new-product');

console.log(images);

//Using setAttribute to change product links

const links = document.getElementById('product1').querySelector('a') 

console.log(links);
links.setAttribute('href', 'https://google.com/')