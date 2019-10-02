import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
      super();
      this.state = { contador: 1 };
      this.incrementCounter(1000, 'contador');
    }
  
    incrementCounter(milliseconds, fieldName) {
      setInterval(() => {
        this.setState({ contador: this.state[fieldName] + 1 })
      }, milliseconds);
    }
  
    render() {
      return <span>{this.state.contador}</span>
    }
  }

  export default Counter;