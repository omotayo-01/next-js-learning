fetch("posts.json")
  .then((res) => res.json())
  .then((posts) => {
    const container = document.getElementById("blog-container");
    posts.forEach((post) => {
      container.innerHTML += `
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <hr>
      `;
    });
  });
