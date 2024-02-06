// Discount Calculator

function layeredDiscountTotal(quantity){
    const firstHundredPrice=100;
    const secondHundredPrice=90;
    const aboveTwoHundredprice=70;
   
    if(quantity<=100){
        const totalPrice=quantity*firstHundredPrice;
        return totalPrice;
    }
    else if(quantity>100&&quantity<=200){   // (quantity<=200) this code is same.
       const firstHundredTotal=100*firstHundredPrice;
       const remainingTotal=(quantity-100)*secondHundredPrice;
      const totalPrice=firstHundredTotal+remainingTotal;
       return totalPrice;
    }
    else{
        const firstHundredTotal=100*firstHundredPrice;
        const secondHundredTotal=100*secondHundredPrice;
        const remainingTotal=(quantity-200)*aboveTwoHundredprice;
        const totalPrice=firstHundredTotal+secondHundredTotal+remainingTotal;
        return totalPrice;
    }
}

const priceTotal=layeredDiscountTotal(300);
console.log(priceTotal);