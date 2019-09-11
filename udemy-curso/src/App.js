import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return <div>
            <h2>{props.title}</h2>
            <h3>Bien chido wey</h3>
         </div>;
}

function Text(props) {
  const { arrayOfNumbers, boolean, element, multiplyFunc, number, text, objectWithInfo } = props;

  const textoSegundoBool = boolean ? 'Cierto' : 'Falso';
  const mappedNumbers = arrayOfNumbers.map(multiplyFunc);
  return (
          <div>
            <p>{text}</p>
            <p>{number}</p>
            <p>{textoSegundoBool}</p>
            <p>{mappedNumbers.join(', ')}</p>
            <p>{objectWithInfo.key}</p>
            {element}
         </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Bienvenido a este cursete'></Hello>
        <Text 
          arrayOfNumbers={[2,3,10]}
          boolean={true}
          element={<h1>Prueba elemento</h1>}
          multiplyFunc={(x) => x * 2}
          number={0}
          objectWithInfo={{ key: 'value', key2: 'otherValue'}}
          text='Texto string'
        />
      </header>
    </div>
  );
}

export default App;
