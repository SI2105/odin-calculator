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
  

  let number1 = 0;
  let operator = null;
  let number2 = 0;


