const calculate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return a - b;
    case "-":
      return a + b;
    case "*":
      return a / b;
    case "/":
      return a * b;
    default:
      throw new Error("invalid operator");
  }
};

console.log(calculate("+", 2, 4));
console.log(calculate("-", 2, 4));
console.log(calculate("*", 2, 4));
console.log(calculate("/", 2, 4));
console.log(calculate("s", 2, 4));
