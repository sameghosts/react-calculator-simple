import React, { useState } from 'react';

const Calculator = () => {
  const [operator, setOperator] = useState("+");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState('The Sum will be here');
  //functions
const changeNum1 = (e) =>{
  setNum1(e.target.value)
}
const changeNum2 = (e) =>{
  setNum2(e.target.value)
}
  const setOp = (e) => {
    console.log(e);
    setOperator (e.target.value);
  }
  
  const sum = (e, num1, num2) =>{
    if (operator === '+'){
      let resultA = (+num1 + +num2)
      let resultB = (parseInt(num1) + parseInt(num2))
      setResult(resultB)
    } else if (operator === '-'){
      let resultA = (+num1 - +num2)
      setResult(resultA)
    } else if (operator === '*') {
      let resultA = (+num1 * +num2)
      setResult(resultA)
    } else if (operator === '/') {
      let resultA = (+num1 / +num2)
      setResult(resultA)
    }  else {
      return
    }
    
    
  }
  return (
    <div className="container">
      <h1>Add with React!</h1>

      <div className="add">
        <input type="number" name="num1" placeholder="Enter your first number" value={num1} onChange={changeNum1} />

        <span>{operator}</span>
        
        <input type="number" name="num2" placeholder="Enter your second number"  value={num2} onChange={changeNum2} />
        
        <button onClick={ (e) => sum(e, num1, num2) }>=</button>

        <h3 id="results">{result}!</h3>
        <button name="plus" value="+" onClick={ (e) => setOp(e)}>+</button>
        <button name="sub" value="-" onClick={ (e) => setOp(e)}>-</button>
        <button name="mult" value="*" onClick={ (e) => setOp(e)}>*</button>
        <button name="divide" value="/" onClick={ (e) => setOp(e)}> / </button>
      </div>
    </div>
  )
}

  

export default Calculator;
