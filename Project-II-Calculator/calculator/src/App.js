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
      total: 0
    }
    this.operation = this.add;
  }

  add = (a, b) => {
    return a + b;
  }

  current = e => {
    console.log('works');
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay displayStyle="display" value={this.state.total}/>
        <div className="flex wrap">
          <ActionButton buttonStyle="action clear" value="clear" />
          <ActionButton buttonStyle="action" value="÷"/>
          <NumberButton buttonStyle="number" value="7"/>
          <NumberButton buttonStyle="number" value="8"/>
          <NumberButton buttonStyle="number" value="9"/>
          <ActionButton buttonStyle="action" value="×"/>
          <NumberButton buttonStyle="number" value="4"/>
          <NumberButton buttonStyle="number" value="5"/>
          <NumberButton buttonStyle="number" value="6"/>
          <ActionButton buttonStyle="action" value="-"/>
          <NumberButton buttonStyle="number" value="1"/>
          <NumberButton buttonStyle="number" value="2"/>
          <NumberButton buttonStyle="number" value="3"/>
          <ActionButton buttonStyle="action" value="+"/>
          <NumberButton buttonStyle="number zero" value="0" />
          <ActionButton buttonStyle="action" value="="/>
        </div>
      </div>
    );
  }
}

export default App;
