function addition(num1,num2){
    return num1+num2;
}

function subtraction(num1,num2){
    return num1-num2;
}

function multiplication(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}

function calculator(a,b, operation){
  if(operation==='addition'){
    const result=addition(a,b);
    return result;
  }
  else if(operation==='subtraction'){
    const result=subtraction(a,b);
    return result;
  }
  else if(operation==='multiplication'){
    const result=multiplication(a,b);
    return result;
  }
  else{
    const result=division(a,b);
    return result;
  }
}

const output=calculator(30,6,'division');
console.log(output);