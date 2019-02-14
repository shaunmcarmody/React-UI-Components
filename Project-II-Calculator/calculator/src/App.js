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
      operator: null,
      previous: 0,
      display: 0
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

  clearAll = () => {
    this.setState({
      current: 0,
      operator: null,
      previous: 0,
      display: this.state.current
    });
  }

  calculate = () => {
    let total = null;
    total = this.state.operator === 'A' ? this.add() : total;
    total = this.state.operator === 'D' ? this.divide() : total;
    total = this.state.operator === 'M' ? this.mutliply() : total;
    total = this.state.operator === 'S' ? this.subtract() : total;
    return total;
  }

  assignOperator = e => {
    if (this.state.operator && this.state.current && this.state.previous) {
      const total = this.calculate();
      return this.setState({
        previous: total,
        current: 0,
        operator: e.target.value,
        display: total
      });
    }

    this.setState({
      previous: this.state.current,
      current: 0,
      operator: e.target.value,
      display: this.state.previous
    });
  }

  assignCurrent = e => {
    this.setState({
      current: parseInt(`${this.state.current}${e.target.value}`),
      display: parseInt(`${this.state.current}${e.target.value}`),
    });
  }

  renderTotal = () => {
    if (this.state.operator && this.state.current && this.state.previous) {
      const total = this.calculate();
      return this.setState({
        previous: total,
        current: 0,
        operator: null,
        display: total
      });
    }
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay displayStyle="display" value={this.state.display}/>
        <div className="flex wrap">
          <ActionButton value="clear"  buttonStyle="action clear" handleAction={this.clearAll} />
          <ActionButton value="÷" buttonStyle="action" operator='D' handleAction={this.assignOperator} />
          <NumberButton value="7" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <NumberButton value="8" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <NumberButton value="9" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <ActionButton value="×" buttonStyle="action" operator='M' handleAction={this.assignOperator} />
          <NumberButton value="4" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <NumberButton value="5" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <NumberButton value="6" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <ActionButton value="-" buttonStyle="action" operator='S' handleAction={this.assignOperator} />
          <NumberButton value="1" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <NumberButton value="2" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <NumberButton value="3" buttonStyle="number" assignCurrent={this.assignCurrent} />
          <ActionButton value="+" buttonStyle="action" operator='A' handleAction={this.assignOperator} />
          <NumberButton value="0" buttonStyle="number zero" assignCurrent={this.assignCurrent} />
          <ActionButton value="=" buttonStyle="action" handleAction={this.renderTotal}/>
        </div>
      </div>
    );
  }
}

export default App;
