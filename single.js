// Hämta produktens ID från URL
const myid = new URLSearchParams(window.location.search).get("id");

let ProductContainer = document.querySelector(".productcontainer");
let productId = myid; // Här kan du också bara använda `myid` direkt om du föredrar det

// Hämta produktdata från API
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    // Uppdatera HTML med produktens information
    ProductContainer.innerHTML = `
    <section class="productcontainer">
      <div class="grid_1_1">
        <figure>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="productimage" class="productimage">
        </figure>

        <section class="productdetails">
          <h2 class="productname">${data.productdisplayname}</h2>
          <div>
            <p class="articletype">${data.usagetype}</p>
            <p class="productcategory">${data.category}</p>
            <p class="productprice">${data.price} kr</p>
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
