const prices = [ 20000, 16000, 50000, 100000, 12000, 3000, 4500];

function getCheapest(numbers){
    let min = numbers[0]
    for(let number of numbers){
        if(number < min){
            min = number;

        }
        
    }
    return min
}


const cheapProduct = getCheapest(prices)
console.log("cheapest one is: ", cheapProduct);
