const height = [65,67,72,70,78,62];

function getMax(numbers){
    let max = numbers[0];
    for(let number of numbers){
       if(number > max){
        max = number;
        
        }
    
    }
    return max
}


const max = getMax(height);
console.log("max value is: ", max);
