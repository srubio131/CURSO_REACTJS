import React, { Component } from 'react'

class ComponentADesmontar extends Component {
    constructor () {
        super()
        this.state = { windowWidth: 0 }
    }

    _updateStateWithWindowWidth = () => {
        this.setState({ windowWidth: document.body.clientWidth })
    }

    componentDidMount () {
        // console.log('componentDidMount')
        this._updateStateWithWindowWidth()
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    componentWillUnmount () {
        // console.log('componentWillUnmount')
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    render () {
        // console.log('render')
        return (
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        )
    }
}

export default class EjemploDeComponenteWillUnmount extends Component {
    state = { mostrarComponente: true }

    render () {
        if (this.state.mostrarComponente) {
            return (
                <div>
                    <h4>Ciclo de desmontaje: componentWillUnmount</h4>
                    <ComponentADesmontar />
                    <button onClick={() => this.setState({ mostrarComponente: false })}>
                        Desmontar Componente
                    </button>
                </div>
            )
        }

        return (
            <p>Componente desmontado</p>
        )
    }
}