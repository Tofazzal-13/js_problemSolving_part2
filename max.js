const disha = 56; 
const salman = 45; 

if(disha > salman){
    console.log( "dish will get the strawberry");
}
else{
    console.log("salman will eat the strawberry");
}


// using function 
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2
    }
}


const max = getMax(45, 65);
console.log("max of two is: ", max);
