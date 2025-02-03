const product_list_container = document.querySelector("#category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategory);

function showCategory(data) {
  const markup = data
    .map(
      (element) =>
        `  <article class="category">
      <a href="list.html?category=${element.category}">${element.category}</a>
  
     </article>`
    )
    .join("");

  console.log(markup);
  category_list_container.innerHTML = markup;
}
