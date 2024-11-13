// slice away the first two elements
const arguments = process.argv.slice(2);

// extract operands and operator from arguments
let [num1, operator, num2] = arguments;

operator = operator.trim();

// covert operands to number. Used parseFloat to convert strings to numbers and to handle numbers with decimals.
const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

// function for each arithmetic operation
// add
function add(number1, number2) {
  return number1 + number2;
}

// subtract
function subtract(number1, number2) {
  return number1 - number2;
}

// multiply
function multiply(number1, number2) {
  return number1 * number2;
}

// divide
function divide(number1, number2) {
  if (number2 === 0) {
    console.error("Cannot divide by zero");
    return null;
  }
  return number1 / number2;
}

// store supported operator in an array
const operators = ["+", "-", "*", "/"];

// object where keys are the operators and values are corresponding functions created
const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

// check if there are three arguments
if (arguments.length !== 3) {
  console.error("Provide two numbers and an operator");
  console.error("Usage: node calculator.js <number1> <operator> <number2>");
  return null;
}

// validate command-line arguments to ensure they are:
// valid numbers
if (isNaN(number1) || isNaN(number2)) {
  console.error("Use valid numbers.");
  return null;
}

// supported operator
if (!operators.includes(operator)) {
  console.error(`unsupported operator. Use one of the operators: ${operators}`);
  return null;
}

// use try...catch blocks to handle potential errors
try {
  const result = operations[operator](number1, number2);
  if (result === null) {
    process.exit(1); //to stop immediately and indicate failure
  }

  console.log(`Answer to ${number1} ${operator} ${number2} is ${result}`);
} catch (error) {
  console.error(error.message);
}
