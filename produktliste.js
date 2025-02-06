// Hämta kategori från URL
const mycategory = new URLSearchParams(window.location.search).get("category");
document.querySelector("#category-heading").textContent = mycategory;

// Hämta kategori-list-container
const category_list_container = document.querySelector("#category_list_container2");

// Hämta och visa alla kategorier
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategory);

function showCategory(data) {
  const markup = data
    .map(
      (element) =>
        `<article class="category2">
          <a href="list.html?category=${element.category}">${element.category}</a>
        </article>`
    )
    .join("");

  category_list_container.innerHTML = markup;
}

// Hämta produkt-list-container
const product_list_container = document.querySelector("#product_list_container");

// Hämta produkter baserat på vald kategori
fetch(`https://kea-alt-del.dk/t7/api/products/?category=${mycategory}`)
  .then((response) => response.json())
  .then(showList);

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<article class="smallproduct ${product.discount ? "onsale" : ""} ${product.soldout ? "soldout" : ""}">
          <div class="instock">
            <a href="singleproduct.html?id=${product.id}">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
            </a>
            ${product.soldout ? `<div class="soldout-overlay">Sold Out</div>` : ""}
          </div>
          <h2>${product.productdisplayname}</h2>
          <h3>${product.price} kr</h3>
          ${
            product.discount
              ? `
            <div class="salelabel">
              <h3 class="down">-${product.discount}%</h3>
              <h3>Now: <span>${(product.price * (1 - product.discount / 100)).toFixed(2)}</span> kr</h3>
            </div>`
              : ""
          }
          <a href="singleproduct.html?id=${product.id}"><p>Read more</p></a>
        </article>`
    )
    .join("");

  product_list_container.innerHTML = markup;
}
