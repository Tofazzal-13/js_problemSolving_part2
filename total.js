const products = [
    {name: "shampoo", price: 300},
    {name: "Chiruni", price: 100},
    {name: "Shirt", price: 700},
    {name: "Paint", price: 1200},
]


function getShoppingTotal(products){
    let totalShopping = 0; 
    for(const product of products){
        totalShopping += product.price;
        
    }
    return totalShopping;
}

const total = getShoppingTotal(products);
console.log("ajke amar total taka koroch hobe: ", total);
