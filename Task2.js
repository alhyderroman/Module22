const friends=['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    let min=friends[0];
    for(const name of names){
        if(name.length<min.length){
            min=name;
        }
    }
    return min;
}

const sname=smallestName(friends);
console.log(sname);
