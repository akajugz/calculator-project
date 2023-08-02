import "./style.scss";

const screenDisplay = document.querySelector(
  ".calculator__display"
) as HTMLElement;
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const allClear = document.querySelector(".data-all-clear");
const equals = document.querySelector(
  ".calculator__buttons--actions.operator.data-equals"
);

let firstNumber: string = "";
let calculatorOperator: string = "";
let secondNumber: string = "";

const handleNumberPress = (event: any) => {
  const target = event.target;
  const digit = target.innerText;
  if (calculatorOperator) {
    secondNumber += digit;
  } else {
    firstNumber += digit;
  }
  updateHTML();
};

const handleOperatorPress = (event: any) => {
  const target = event.target;
  calculatorOperator = String(target.innerText);
  updateHTML();
};

const handleAllClearPress = () => {
  firstNumber = "";
  calculatorOperator = "";
  secondNumber = "";
  updateHTML();
};

const performCalculation = (
  num1: number,
  operator: string,
  num2: number
): number => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return NaN;
  }
};

const handleEqualsPress = () => {
  if (firstNumber && calculatorOperator && secondNumber) {
    const result = performCalculation(
      parseFloat(firstNumber),
      calculatorOperator,
      parseFloat(secondNumber)
    );
    if (!isNaN(result)) {
      screenDisplay.innerText = result.toFixed(2);
      firstNumber = result.toString();
      calculatorOperator = "";
      secondNumber = "";
    } else {
      screenDisplay.innerText = "Error";
    }
  }
};

const updateHTML = () => {
  screenDisplay.innerText = `${firstNumber} ${calculatorOperator} ${secondNumber}`;
};

// EVENT LISTENERS

numbers.forEach((number) => {
  number.addEventListener("click", handleNumberPress);
});

operator.forEach((operators) => {
  operators.addEventListener("click", handleOperatorPress);
});

allClear?.addEventListener("click", handleAllClearPress);

equals?.addEventListener("click", handleEqualsPress);