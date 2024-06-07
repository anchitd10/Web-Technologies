let oddNumbers=[];
let evenNumbers=[];

for(let i=1; i<=100;i++){
    if(i%2==0){
        evenNumbers.push(i);
    }
    else{
        oddNumbers.push(i);
    }
}

console.log("Odd numbers:", oddNumbers);
console.log("Even numbers:", evenNumbers);