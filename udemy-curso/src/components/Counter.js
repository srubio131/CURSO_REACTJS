import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = { contador: this.props.contadorInicial };
    }

    componentDidMount = () => {
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

  const CounterNumber = ({ number }) => (
    <span>{number}</span>
  )

  export default Counter;