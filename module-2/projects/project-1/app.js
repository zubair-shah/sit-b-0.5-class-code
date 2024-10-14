let productList = [];
function pushObject() {
    let productName = document.getElementById('product-name').value
    let productPrice = document.getElementById('product-price').value

    let obj = {
        product_name: productName,
        product_price: Number(productPrice)
    }

    productList.push(obj)
    document.getElementById('para').innerHTML = `your last product name is ${productName} and your last product price is ${productPrice}`
    console.log('obj', obj)
    console.log('productList', productList)
}

