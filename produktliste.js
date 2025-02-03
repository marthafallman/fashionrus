const product_list_container = document.querySelector("#product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/?limit=50`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<article class="smallproduct">
          <div id="instock">
            <a href="singleproduct.html">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
            </a>
          </div>
          <h2>${product.productdisplayname}</h2>
          <h3>${product.price} kr</h3>
          <a href="singleproduct.html"><p>Read more</p></a>
        </article>`
    )
    .join("");

  console.log(markup);
  product_list_container.innerHTML = markup;
}
