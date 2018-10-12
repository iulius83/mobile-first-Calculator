let newNumber = false;
let operator;
let result;
let a;
let b;

(function getButtonValue() {

  let buttons = document.getElementsByTagName("button");
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      let incomingValue = e.target.innerHTML;

      getStuffDone(incomingValue);

      return false;
    });
  });
})();

function getStuffDone(incomingValue) {
  let input = document.getElementById("input");

  if (parseFloat(incomingValue) < 10) {
    if (newNumber == true) {
      input.value += incomingValue;
    } else {
      input.value = incomingValue;
      newNumber = true;
    }
  } else if (incomingValue === "." && !input.value.includes(".")) {
    input.value += incomingValue;

  } else if (incomingValue == "-" && input.value === "") {
    input.value = incomingValue;
    newNumber = true;
  
  } else if (incomingValue === "+" || incomingValue === "-" || incomingValue === "*" || incomingValue === "/") {
    newNumber = false;
    
    if (a) {
      b = input.value;
      result = eval(a + operator + b);
      operator = incomingValue;
      input.value = result;
      a = input.value;
    } else {
      a = input.value;
      operator = incomingValue;
    }

  } else if (incomingValue === "=") {
    b = input.value;
    if (a && b) {
        
      result = eval(a + operator + b);
      input.value = result;

      newNumber = true;
      operator = undefined;
      a = undefined;
      b = undefined;
    }

  } else if (incomingValue === "C") {
    input.value = "";
    newNumber = true;
    operator = undefined;
    a = undefined;
    b = undefined;
  } 
}

function BlockMove(event) {
  event.preventDefault();
}