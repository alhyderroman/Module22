const products=[
    {name:'Shampo',price:300,quantity:5},
    {name:'Chanachur', price:50,quantity:5},
    {name: 'Zira',price:120,quantity:5},
]

function getShoppingCost(products){
    let price=0;
    for(const product of products){
        price=price+product.price*product.quantity;

    }
    return price;
}

const priceTotal=getShoppingCost(products);
console.log(priceTotal);