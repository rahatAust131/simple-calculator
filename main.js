class Calculator {
  constructor(previousOperandTextField, currentOperandTextField) {
    this.previousOperandTextField = previousOperandTextField;
    this.currentOperandTextField = currentOperandTextField;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
    this.previousOperandTextField.innerText = '';
    this.currentOperandTextField.innerText = '';
  }

  delete() {

  }

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {

  }

  calculate() {

  }

  updateDisplay() {
    this.currentOperandTextField.innerText = this.currentOperand;
    
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


const calculator = new Calculator(previousOperandTextField, currentOperandTextField);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
});

allClearButton.addEventListener('click', () => calculator.clear());
