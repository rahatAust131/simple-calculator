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
    if(number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if(this.currentOperand === '') return;
    if(this.previousOperand !== '') {
      this.calculate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  calculate() {
    let calculation;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);

    if(isNaN(prev) || isNaN(curr)) return;

    switch (this.operation) {
      case '+':
        calculation = prev + curr;
        break;
    
      case '-':
        calculation = prev - curr;
        break;
    
      case '*':
        calculation = prev * curr;
        break;
    
      case '/':
        calculation = prev / curr;
        break;
    
      default:
        return;
    }
    this.currentOperand = calculation;
    this.previousOperand = '';
    this.operation = undefined;
    
  }

  updateDisplay() {
    this.currentOperandTextField.innerText = this.currentOperand;
    this.previousOperandTextField.innerText = this.previousOperand;
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


operatorButtons.forEach(operator => {
  operator.addEventListener('click', () => {
    calculator.chooseOperation(operator.innerText);
    calculator.updateDisplay();
  })
});

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener('click', () => {
  calculator.calculate();
  calculator.updateDisplay();
});