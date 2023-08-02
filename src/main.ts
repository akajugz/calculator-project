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

// EVENT LISTENERS

numbers.forEach((number) => {
  number.addEventListener("click", handleNumberPress);
});

operator.forEach((operators) => {
    operators.addEventListener("click", handleOperatorPress);
  });
