import React from 'react';
import './App.scss';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      calculate: null,
      display: 0,
      previous: 0,
      total: 0,
    }
  }

  add = (a, b) => {
    return this.state.previous + this.state.current;
  }

  divide = (a, b) => {
    return this.state.previous / this.state.current;
  }

  mutliply = (a, b) => {
    return this.state.previous * this.state.current;
  }

  subtract = (a, b) => {
    return this.state.previous - this.state.current;
  }

  // Try and refactor - make more modular
  assignOperator = (operator, e) => {
    if (this.state.calculate !== null) {
      this.setState({
        previous: this.state.calculate(),
        current: 0,
        display: this.state.calculate()
      });
    } else {
      this.setState({
        previous: this.state.current,
        current: 0,
        calculate: operator,
        display: this.state.previous
      });
    }
  }

  calculate = () => {
    const total = this.state.calculate();
    this.setState({ total });
    this.updateDisplay(total);
  }

  clearAll = () => {
    this.setState({ current: 0, calculate: null, previous: 0, total: 0 });
    this.updateDisplay(0);
  }

  currentNumber = e => {
    if (this.state.calculate === null && this.state.total > 0) this.resetTotal();
    const current = parseInt(`${this.state.current}${e.target.value}`);
    this.setState({ current });
    this.updateDisplay(current);
  }

  getTotal = () => {
    this.calculate();
    this.setState({ calculate: null, current: this.state.total, previous: 0 })
  }
  
  resetTotal = () => this.setState({ total: 0 });

  updateDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay displayStyle="display" value={this.state.display}/>
        <div className="flex wrap">
          <ActionButton value="clear" buttonStyle="action clear" handleAction={this.clearAll} />
          <ActionButton value="÷" buttonStyle="action" handleAction={e => this.assignOperator(this.divide, e)} />
          <NumberButton value="7" buttonStyle="number" currentNumber={this.currentNumber} />
          <NumberButton value="8" buttonStyle="number" currentNumber={this.currentNumber} />
          <NumberButton value="9" buttonStyle="number" currentNumber={this.currentNumber} />
          <ActionButton value="×" buttonStyle="action" handleAction={e => this.assignOperator(this.mutliply, e)} />
          <NumberButton value="4" buttonStyle="number" currentNumber={this.currentNumber} />
          <NumberButton value="5" buttonStyle="number" currentNumber={this.currentNumber} />
          <NumberButton value="6" buttonStyle="number" currentNumber={this.currentNumber} />
          <ActionButton value="-" buttonStyle="action" handleAction={e => this.assignOperator(this.subtract, e)} />
          <NumberButton value="1" buttonStyle="number" currentNumber={this.currentNumber} />
          <NumberButton value="2" buttonStyle="number" currentNumber={this.currentNumber} />
          <NumberButton value="3" buttonStyle="number" currentNumber={this.currentNumber} />
          <ActionButton value="+" buttonStyle="action" handleAction={e => this.assignOperator(this.add, e)} />
          <NumberButton value="0" buttonStyle="number zero" currentNumber={this.currentNumber} />
          <ActionButton value="=" buttonStyle="action" handleAction={this.getTotal}/>
        </div>
      </div>
    );
  }
}

export default App;
