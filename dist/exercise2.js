"use strict";
class Calculator {
    //for all methods I had to use the type 'any' to handle the possibility of a user adding 
    //any other type other than a number
    // I also had to use the type string to handle the string error messages
    add(a, b) {
        if (this.validateInputs(a, b)) {
            return a + b;
        }
        return "Invalid inputs. Both inputs must be numbers.";
    }
    subtract(a, b) {
        if (this.validateInputs(a, b)) {
            return a - b;
        }
        return "Invalid inputs. Both inputs must be numbers.";
    }
    multiply(a, b) {
        if (this.validateInputs(a, b)) {
            return a * b;
        }
        return "Invalid inputs. Both inputs must be numbers.";
    }
    divide(a, b) {
        if (this.validateInputs(a, b)) {
            if (b === 0) {
                return "Division by zero is not allowed.";
            }
            return a / b;
        }
        return "Invalid inputs. Both inputs must be numbers.";
    }
    validateInputs(a, b) {
        return typeof a === 'number' && typeof b === 'number';
    }
}
const calculator = new Calculator();
console.log(calculator.add(17, 50));
console.log(calculator.subtract(23, 7));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(15, 3));
console.log(calculator.divide(5, 0));
console.log(calculator.add(2, "3"));
