const products = [
    {name: "shampoo", price: 300, quantity: 2},
    {name: "Chiruni", price: 100, quantity: 3},
    {name: "Shirt", price: 700, quantity: 6},
    {name: "Paint", price: 1200, quantity: 2},
]


function cartTotal(products){
    let total = 0; 
    for(const product of products){
        const thisItemCost = product.price * product.quantity;
        total += total + thisItemCost;    
        
    }
    return total; 
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);
