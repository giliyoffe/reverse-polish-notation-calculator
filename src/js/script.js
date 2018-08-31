


let result = document.getElementById("submitBtn").addEventListener("click", calculate(document.getElementById("expression").value)
);

//Array for identifying operators
const operatorsArr = ["+", "-", "*", "/"];

const operators = {
    "+" : function (num1, num2) {
      return parseFloat(num1) + parseFloat(num2);
    },
    "-" : function (num1, num2) {
        return num1 - num2;
    },
    "*" : function (num1, num2) {
        return num1 * num2;
    },
  "/" : function (num1, num2) {
        return num1 / num2;
    }
  };

function calculate (expression) {
  
  //Empty expression
  if(expression === ""){
    return 0;

  }

//TODO: CAN MOVE OUT OF FUNC.?
  //calculate math operation on numbers by a given operator
  function calc(num1, num2, operator) {
    return operators[operator](num1, num2);
  }

  const expressionArray = expression.split(" ");
  
  //store evaluated elments
  let calculated = [];
      
  let hasOperator = false;
  
  for(i = 0; i <= expressionArray.length; i++){
    
    if(operatorsArr.includes(expressionArray[i])){
      // if is not an operator
      calculated.push(expressionArray[i]);
      
    } else if( operatorsArr.includes(expressionArray[i]) ){

    //TODO: test that new changes work with the includes instead of the indexOf

      hasOperator = true;

      let secondOperand = calculated.pop();
      let firstOperand = calculated.pop();
      //expressionArray[i] is the operator to be used in this calculation
      let tmpSum = calc([firstOperand, secondOperand], expressionArray[i])
      calculated.push(tmpSum.toString());
    }
  }
  
  //No Operator in expression. Return last number in expression.
  if(!hasOperator){
    return parseFloat(expressionArray[expressionArray.length-1]);
  }
  
 return parseFloat(calculated[0]);
}

document.getElementById("result").innerHTML = result;


/* // TODO:
tests:

let assert = require("chai").assert;
describe('Challenge', function() {
  it('should work for an empty string', function() {
    assert.equal(calculate(""), 0);
  });

  it('should parse numbers', function() {
    assert.equal(calculate("1 2 3"), 3);
  });
  
  it('should parse floats', function() {
    assert.equal(calculate("1 2 3.5"), 3.5);
    assert.equal(calculate("1 3.5 +"), 4.5);
    assert.equal(calculate("1.3 4.5 +"), 5.8);
  });
  
  it('should support addition', function() {
    assert.equal(calculate("1 3 +"), 4);
    assert.equal(calculate("10000 123 +"), 10123);
  });
 
  it('should support multiplication', function() {
    assert.equal(calculate("1 3 *"), 3);
  });
  
  it('should support subtraction', function() {
    assert.equal(calculate("1 3 -"), -2);
  });
  
  it('should support division', function() {
    assert.equal(calculate("4 2 /"), 2);
  });
  
  it('should support multiple operations', function() {
    assert.equal(calculate("5 1 2 + 4 * + 3 -"), 14);
  });
});
*/