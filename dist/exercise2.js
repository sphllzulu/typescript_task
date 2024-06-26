"use strict";
class Calculator {
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
// Example usage
const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(4, 3)); // 12
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0)); // Division by zero is not allowed.
console.log(calculator.add(2, "3")); // Invalid inputs. Both inputs must be numbers.
console.log(calculator.subtract("10", 5)); // Invalid inputs. Both inputs must be numbers.
console.log(calculator.multiply(4, "three")); // Invalid inputs. Both inputs must be numbers.
console.log(calculator.divide("ten", 2)); // Invalid inputs. Both inputs must be numbers.
