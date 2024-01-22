const add = function(a,b) {
    return a+b;
  };
  
  const subtract = function(a,b){
    return a-b;
  };
  
  const multiply = function(a,b) {
    return a*b; 
  };
  
  const divide = function(a,b){
    return a/b;
  };

const operate = function(num1,operator,num2){
    if (operator === "+"){
        return add(num1,num2)
    }
    else if (operator === "-"){
        return subtract(num1,num2);
    }

    else if(operator === "*"){
        return multiply(num1,num2);
    }

    else if(operator === "/"){
        return divide(num1,num2)
    }
}


let number1 = null;
let operator = null;
let number2 = null;

let buttons = document.querySelectorAll('.button.number');
function handlenumberbuttons(e){
    let results = document.querySelector('.resultsarea');
    results.textContent += e.target.textContent;
}
buttons.forEach(button => {
    button.addEventListener('click',handlenumberbuttons)
} )

let operators = document.querySelectorAll('.button.operator');

function handleopeartorbuttons(e){
  let results = document.querySelector('.resultsarea');
  if (results != "" && number2 === null && operator === null){
 
    number1 = Number(results.textContent);
    results.textContent = "";
    operator = e.target.textContent;
  }

  else if(operator != null){
    number2 = Number(results.textContent);
    results.textContent = operate(number1, operator, number2);
   
    number2 = null;
    operator = null;
  }


}



operators.forEach(operator => {
  operator.addEventListener('click', handleopeartorbuttons);
})

