
// =========================async-await====================

async function getUsersOfGithub() {
    console.log('inside function')
    try {
        let response = await fetch('https://dummyjson.com/products', {

        })
        console.log(' response:', response)
        let data = response.json();
        return data;
    } catch (err) {
        console.log(err)
    }

}

let productData = getUsersOfGithub()
var productHtml = document.getElementById("product_container");
productData.then((products) => {
    console.log(products)
    let data = products.products;
    data.map((pro) => {
        productHtml.innerHTML += `
            <div class="product" onclick="productId(${pro.id})">
                <div class="product_layout">
                    <div class="product_Section">
                        <img src="${pro.thumbnail}" class="img">
                        <div class="product_content">
                            <h4>${pro.title}</h4>
                            <h5>Price: $${pro.price}</h5>
                        </div>
                    </div>
                </div>
            </div>`
    });

})
    .catch((err) => {
        console.log(err)
    })


function productId(productId) {
    console.log(productId)
    localStorage.setItem('product_id', productId)
    // let url = `https://dummyjson.com/products/${productId}`;
    setTimeout(() => {
        window.location.href = "./product-detail.html";
    }, 1000)
}