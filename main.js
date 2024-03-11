let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  // Store all components on HTML and JS
  let clear = this.querySelector(".clear");
  let equal = this.querySelector(".equal");
  let decimal = this.querySelector(".decimal");

  let numbers = this.querySelectorAll(".number");
  let operators = this.querySelectorAll(".operator");

  let previousScreen = this.querySelector(".previous");
  let currentScreen = this.querySelector(".current");

  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  );
  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousScreen.textContent = previousValue + " " + operator;
      currentScreen.textContent = currentValue;
    })
  );
  clear.addEventListener("click", function (e) {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  });
});

function handleNumber(num) {
  if (currentValue.length <= 7) {
    currentValue += num;
  }
}
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}
