import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello'
import Text from './components/Text'
import Counter from './components/Counter'
import ConditionalSection from './sections/conditional';
import EventsSection from './sections/events';
import FormControlado from './sections/formControlado';
import BoxPropChildren from './sections/boxPropChildren';
import ArticlePropChildren from './sections/articlePropChildren';
import ListNumbers from './components/ListNumbers';
import ListObjectCars from './components/listObjectCars/ListObjectCars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <h1>Componente ArticlePropChildren (props.children & PropTypes)</h1>
        <ArticlePropChildren
          author='Sergio'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'>
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </ArticlePropChildren>
        <hr/>
        <h1>Componente BoxPropChildren (props children)</h1>
        <BoxPropChildren>Hello, premoh!</BoxPropChildren>
        <BoxPropChildren>Otro premoh, here!</BoxPropChildren>
        <hr/>
        <h1>Componente Forms</h1>
        <FormControlado />
        <hr/>
        <h1>Componente Events (onMouseMove)</h1>
        <EventsSection />
        <hr/>
        <h1>Componente Lista de objetos coche</h1>
        <ListObjectCars />
        <hr/>
        <h1>Componente Lista de números</h1>
        <ListNumbers />
        <hr/>
        <h1>Componente ConditionalSection</h1>
        <ConditionalSection />
        <hr/>
        <h1>Componente Contador</h1>
        <Counter contadorInicial={-100}></Counter>
        <hr/>
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
      </section>
    </div>
  );
}

export default App;
