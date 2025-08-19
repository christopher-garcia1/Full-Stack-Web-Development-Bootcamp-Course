//For this example, let's consider a gallery of images where each image has an associated data attribute called `data-author` that stores the author's name. You want to filter the images by author.

//Get all the images 
const images = document.getElementById('imageGallery').querySelectorAll('img')
console.log(images);


// Create an array to store images by Alice

const imagesByAlice = Array.from(images).filter(image => image.getAttribute('data-author') === 'Alice')


//Use getAttribute to filter images by author Alice



// Hide images that are not by Alice

console.log(imagesByAlice);

images.forEach((img) => {
  if (!imagesByAlice.includes(img)) {
    img.style.display = 'none'
  }
})