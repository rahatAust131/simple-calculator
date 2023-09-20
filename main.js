class Calculator {
  constructor(previousOperandTextField, currentOperandTextField) {
    this.previousOperandTextField = previousOperandTextField;
    this.currentOperandTextField = currentOperandTextField;
    this.clear();
  }

  clear() {
    this.currentOperandTextField = "";
    this.previousOperandTextField = "";
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {

  }

  chooseOperation(operation) {

  }

  calculate() {

  }

  updateDisplay() {

  }
}

// selection of all the necessary buttons & textfields
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextField = document.querySelector('[data-previous-operand]');
const currentOperandTextField = document.querySelector('[data-current-operand]');

