import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello'
import Text from './components/Text'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <h1>Componente Hello</h1>
        <Hello title='Bienvenido a este cursete'></Hello>
        <hr/>
        <h1>Componente Text</h1>
        <Text 
          arrayOfNumbers={[2,3,10]}
          boolean={true}
          element={<h1>Prueba elemento</h1>}
          multiplyFunc={(x) => x * 2}
          number={0}
          objectWithInfo={{ key: 'value', key2: 'otherValue'}}
          text='Texto string'
        />
        <hr/>
        <h1>Componente Contador</h1>
        <Counter></Counter>
        <hr/>
      </body>
    </div>
  );
}

export default App;
