function cheapestPhone(phones){
 let min=phones[0];
 for(const phone of phones){
   if( phone.price<min.price){
    min=phone;
 }
 return min;
}
}

const mobiles=[
    {name: 'Nokia', price: 20000, camera: '30px', model: '1100T'},
    {name: 'Samsung', price: 23000, camera: '30px', model: '1100T'},
    {name: 'Iphone', price: 29000, camera: '30px', model: '1100T'},
    {name: 'Xiaomi', price: 28000, camera: '30px', model: '1100T'}
]

const cheap=cheapestPhone(mobiles);
console.log(cheap);