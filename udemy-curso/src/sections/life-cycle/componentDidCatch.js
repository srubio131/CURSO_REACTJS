import React, { Component } from 'react'

class BotonQueLanzaError extends Component {
  state = { throwError: false }

  render () {
    if (this.state.throwError) {
      // Al estar en desarrollo este error aparece en la pantalla (en producción solo en consola)
      // Al sacar un error, ReactJs desmonta el componente automaticamente (por lo que desaparece de la pantalla)
      throw new Error('Error lanzado por el botón')
    }

    return (
      <button onClick={() => this.setState({ throwError: true })}>
        Lanzar error!
      </button>
    )
  }
}

class EjemploDeComponentDidCatch extends Component {
  state = { hasError: false, errorMsg: '' }

  // Este evento del ciclo de vida aplica a cuando uno o varios componentes hijos petan
  componentDidCatch (error, errorInfo) {
      console.log('componentDidCatch')
      console.log({ error, errorInfo })
      this.setState({ hasError: true, errorMsg: error.toString() })
  }

  render () {
    if (this.state.hasError) {
      return (
        <div>
          <p>Error en el componente: {this.state.errorMsg}</p>
          <button onClick={() => { this.setState({ hasError: false })}}>
            Volver a la aplicación
          </button>
        </div>
      )
    }

    return (
      <div>
        <h4>Ciclo de montaje: componentDidCatch</h4>
        <BotonQueLanzaError />
      </div>
    )
  }
}

export default EjemploDeComponentDidCatch