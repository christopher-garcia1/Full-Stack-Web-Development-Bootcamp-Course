const container = document.querySelector(".posts-container");

const fetchPost = async () => {
  try {
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await postResponse.json();
    container.innerHTML = "";
    posts.forEach((post) => {
      container.appendChild(createCard(post));
    });
  } catch (error) {
    console.log("error", error);
  }
};

const createCard = (post) => {
  // const card = document.createElement('div')
  // card.className = 'post-card'
  // const title = document.createElement('h2')
  // title.className = 'post-title'
  // title.textContent = post.title
  // const body = document.createElement('p')
  // body.className = 'post-body'
  // body.textContent = post.body
  // card.appendChild(title)
  // card.appendChild(body)
  // return card
  const card = document.createElement("div");
  card.className = "post-card";
  card.innerHTML = `
    <h2 class="post-title">${post.title}</h2>
    <p class="post-body">${post.body}</p>
  `;
  return card;
};
fetchPost();
