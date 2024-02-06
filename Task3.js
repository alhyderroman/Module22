function calculateElectronicsBudget(laptop,tablet,mobile){
    const perLaptopPrice=35000;
    const perTabletPrice=15000;
    const perMobilePrice=20000;
    const totalBudget=laptop*perLaptopPrice+tablet*perTabletPrice+mobile*perMobilePrice;
    return totalBudget;
}

const total=calculateElectronicsBudget(3,2,1);
console.log(total);