function maxHeight(heights){
 let max=heights[0];
 for(const height of heights){
    if(height>max){
        max=height;
    }
 }
    return max;
}


const numbers=[34,21,67,89,45,67,23];
const max=maxHeight(numbers);
console.log(max);

console.log('...............................')
function minHeight(heights){
    let min=heights[0];
    for(const height of heights){
       if(height<min){
           min=height;
       }
    }
       return min;
   }
   
   
   const numbers1=[34,21,67,89,45,67,23];
   const min=minHeight(numbers);
   console.log(min);