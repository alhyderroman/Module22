function maxThree(n1,n2,n3){
    if(n1>n2&& n1>n3){
        return n1;
    }
    else if(n2>n1 && n2>n3){
        return n2;
    }
    return n3;
}


const max=maxThree(56,43,23);
console.log(max);