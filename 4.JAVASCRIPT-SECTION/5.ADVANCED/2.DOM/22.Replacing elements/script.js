// Function to replace an article
const replaceArticle = (articleId, newContent) => {
  // Find the existing article element by its ID
  const existingArticle = document.getElementById(articleId);
  //Create a new div element for the updated article
  const newArticle = document.createElement("div");
  //add css to it
  newArticle.className = "article";
  // Keep the ID same for the new article
  newArticle.id = articleId;
  //Create a text node for the new content
  //Append the text node to the new article div
  newArticle.textContent = newContent;
  // Replace the existing article with the new one
  document
    .getElementById("articleContainer")
    .replaceChild(newArticle, existingArticle);
};

replaceArticle("article1", "hello");
