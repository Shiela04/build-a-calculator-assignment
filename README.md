# Simple Command-line Calculator

This project is a command-line calculator built in Node.js that can perform the four basic arithmetic operations: addition, subtraction, multiplication, and division. **You need Node.js installed to run this project**.

## Installation

1. Clone the repository

   git clone <https://github.com/Shiela04/build-a-calculator-assignment.git>

2. Go to the directory

   cd build-a-calculator-assignment

3. Open the folder in VS Code

   code .

## Instructions on how to run the calculator from command line

1. Open calculator.js
2. Open the terminal window (PowerShell or your terminal of choice except Bash)
3. Run the script with the following command:

   node calculator.js [number1] [operator] [number2]

   - number1: first operand
   - operator: one of the operators: +, -, \*, /
   - number2: second operand

### Example

- To add 5 and 3, type this in the terminal:

  node calculator.js 5 + 3

- Output:

  Answer to 5 + 3 is 8

## Error Handling

- Invalid number: An error message will be displayed if the operands are not valid numbers.
- Unsupported operator: An error message will be displayed if the operator used is not one of the operators: +, -, \*, /.
- Division by zero: An error message will be displayed if you divide by zero.

## Challenges I Encounterednodecano

### Validating Input

I was using the Git Bash terminal to validate inputs. I noticed that the operators \* and / are not working and I thought it was a problem in my code. After hours of researching, I learned that it might be a problem with the terminal so I switched to Powershell and my code works just fine.
