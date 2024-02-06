const heights=[167, 190, 120, 165, 137];

function lowestNumber(numbers){
    let min=numbers[0];
    for(num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;

}

  const min=lowestNumber(heights);
  console.log(min);