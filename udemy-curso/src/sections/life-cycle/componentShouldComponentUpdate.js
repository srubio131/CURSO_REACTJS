import React, { Component } from 'react'

const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQxb',
  dolphin: 'https://goo.gl/BbiKCd'
}
const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
  constructor (props) {
    // console.log('constructor')
    super(props)
    this.state = { src: ANIMAL_IMAGES[this.props.animal] }
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    // console.log('componentWillReceiveProps')
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
  }
  
  // Este método no sería necesario si usasemos "PureComponent" porque internamente hace que 
  // shouldComponentUpdate devuelva false si no hay cambios ni en el props ni en el state
  shouldComponentUpdate (nexProps) {
    // console.log('shouldComponentUpdate')
    return this.props.animal !== nexProps.animal
  }

  render () {
    // console.log('render')
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img alt={this.props.animal}
             src={this.state.src}
             width='250'/>
      </div>
    )
  }
}

export default class ComponentShouldComponentUpdate extends Component {
  state = { animal: 'panda' }

  _renderAnimalButton = (animal) => {
    return (
      <button disabled={animal === this.state.animal}
              key={animal}
              onClick={() => this.setState({ animal })}>
              {animal}
      </button>
    )
  }

  render () {
    return (
      <div>
        <h4>Ciclo de Actualización, Ejemplo de: ShouldComponentUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    )
  }
}