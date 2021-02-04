import React, { Component } from 'react';

let res;
class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
    operator: "+",
    num1: 0,
    num2: 0,
    result: 'The Sum will be here',
    }
    this.setNum = this.setNum.bind(this)
    this.sum = this.sum.bind(this)
    this.setOp = this.setOp.bind(this)
  }
  
  componentDidMount = {
  
  }
  
  setNum = (e, num) => {
    this.setState({ 
      [num]: e.target.value
    })
    console.log(this.state.num1)
  }
  //changes the operator to the value of which button is selected. 
  setOp = (e) => {
    this.setState({
      operator: e.target.value
    })
  }
  // i was lazy, this could be changed to something like "equals" since the function shifts which evaluation it will do based on evaluating the state of operator (this.state.operator) which is changed by the setOp function
  sum = (e, num1, num2) =>{
    if (this.state.operator === '+'){
      let resultA = (+num1 + +num2)
      this.setState({ 
        result: resultA
      })
    } else if (this.state.operator === '-'){
      let resultA = (+num1 - +num2)
      this.setState({ 
        result: resultA
      })
    } else if (this.state.operator === '*') {
      let resultA = (+num1 * +num2)
      this.setState({ 
        result: resultA
      })
    } else if (this.state.operator === '/') {
      let resultA = (+num1 / +num2)
      this.setState({ 
        result: resultA
      })
    }  else {
      return
    }
    
      console.log(`num1 is ${this.state.num1}`)
      console.log(`num2 is ${this.state.num2}`)
    
  }
  render () {
  
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number" name="num1" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => this.setNum(e, 'num1')} />
          <span>{this.state.operator}</span>
          <input type="number" name="num2" placeholder="Enter your second number"  value={this.state.num2} onChange={ (e) => this.setNum(e, 'num2') } />
          <button onClick={ (e) => this.sum(e, this.state.num1, this.state.num2) }>=</button>
          <h3 id="results">{this.state.result}!</h3>
          <button name="plus" value="+" onClick={ (e) => this.setOp(e)}>+</button>
          <button name="sub" value="-" onClick={ (e) => this.setOp(e)}>-</button>
          <button name="mult" value="*" onClick={ (e) => this.setOp(e)}>*</button>
          <button name="divide" value="/" onClick={ (e) => this.setOp(e)}> / </button>
        </div>
      </div>
    )
  }
};
export default Calculator;
