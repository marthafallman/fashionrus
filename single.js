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

// Hämta produktens ID från URL
const myid = new URLSearchParams(window.location.search).get("id");
const ProductContainer = document.querySelector(".productcontainer");

// Hämta produktdata från API
fetch(`https://kea-alt-del.dk/t7/api/products/${myid}`)
  .then((response) => response.json())
  .then((data) => {
    // Uppdatera HTML med produktens information
    ProductContainer.innerHTML = `
    <section class="productcontainer">
      <div class="grid_1_1">
        <div class="singleproduct">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}" />
            ${data.soldout ? `<div class="soldout-overlay2">Slutsåld</div>` : ""}
        </div>

        <section class="productdetails">
          <h2 class="productname">${data.productdisplayname}</h2>
          <div>
            <p class="articletype">${data.usagetype}</p>
            <p class="productcategory">${data.category}</p>
            <p class="productprice">${data.price} kr</p>
            ${
              data.discount
                ? `
              <div class="salelabel">
                <p class="down2">-${data.discount}%</p>
                <p class="singlenewprice">Now: <span>${(data.price * (1 - data.discount / 100)).toFixed(2)}</span> kr</p>
              </div>`
                : ""
            }
          </div>

          <label for="size">Choose size:</label>
          <select id="size" name="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">X-Large</option>
          </select>
          <button>Add to Bag</button>
        </section>
      </div>
    </section>`;
  });
