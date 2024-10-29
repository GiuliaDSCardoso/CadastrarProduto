function fetchProducts() {
    fetch('list_products.php')
    .then(response => response.json())
    .then(data =>{
        const productList = document.getElementById('productList');
        productList.innerHTML = '';

        data.forEach(product => {
            const div = document.createElement('div');
            div,innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>${product.description}</p>
                <button onclick="deleteProduct(${product.id})">Delete</button>
                `
        })
        })

    })