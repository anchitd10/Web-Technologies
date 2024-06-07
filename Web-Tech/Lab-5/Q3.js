let num1 = parseFloat(prompt('Enter first number:'));
let operator = prompt('Enter operator:');
let num2 = parseFloat(prompt('Enter second number:'));

// Performing the calculation
let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        result = 'Invalid operator';
}

console.log(result);

