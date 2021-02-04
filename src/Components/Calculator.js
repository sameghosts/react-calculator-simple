import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operator: "+",
      num1: 0,
      num2: 0,
      result: 0,
    }
    this.setNum = this.setNum.bind(this)
  }
  render () {
    setNum = (e, num) => {
      this.setState({ [num]: e.target.value})
    }
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" name="num1" placeholder="Enter your first number" value={this.state.num1} onchange={ (e) => this.setNum(e, 'num1')} />
          <span>+</span>
          <input type="text" value={this.state.num2} onchange={ (e) => this.setNum(e, 'num2') } />
          <button>=</button>
          <h3>Addition Results go here!</h3>
        </div>
      </div>
    )
  }
}
export default Calculator;
