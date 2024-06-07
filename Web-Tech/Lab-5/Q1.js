let num1 = parseInt(prompt("Enter first number="));
let num2 = parseInt(prompt("Enter second number="));

if(num1 > num2){
    console.log(`Largest number is ${num1}`);
}

if(num2 > num1){
    console.log(`Largest number is ${num2}`);
}

else{
    console.log("Both numbers are equal");
}