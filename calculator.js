function add(num1, num2){
    return num1 + num2;
}


function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


function calculator(a,b,operation){
    if(operation === "add"){
        return add(a, b)
    }
    else if(operation === "subtract"){
        return substract(a, b)
    }
    else if(operation === "multiply"){
        return multiply(a, b)
    }
    else if(operation === "divide"){
        return divide(a, b)
    }
    else{
        return "tmi check kore dekho kichu ekta vul korecho"
    }
}


const result = calculator(5,2,"multiply");
console.log(result);
