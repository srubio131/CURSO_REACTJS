import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = { contador: this.props.contadorInicial };
      this.incrementCounter(1000, 'contador');
    }
  
    incrementCounter(milliseconds, fieldName) {
      setInterval(() => {
        this.setState({ contador: this.state[fieldName] + 1 })
      }, milliseconds);
    }
  
    render() {
      return <CounterNumber number={ this.state.contador }></CounterNumber>
    }
  }

  Counter.defaultProps = {
    contadorInicial: 0
  }

  class CounterNumber extends Component {
    render () {
      return <span>{this.props.number}</span>
    }
  }

  export default Counter;