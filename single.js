let ProductContainer = document.querySelector(".productcontainer");
let productId = 1573;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    ProductContainer.innerHTML = `    

    <section class="productcontainer">
<figure>
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="productimage" 
    class="productimage">
</figure>

<section class="productdetails">
<h2 class="productname">${data.productdisplayname}</h2>
<div>
    <p class="articletype">${data.usagetype}</p>
    <p class="productcategory">${data.category}</p>
    <p class="productprice">${data.price}kr</p>
</div>
</section>
    </section>`;
  });
