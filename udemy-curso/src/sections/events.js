import React, { Component } from 'react';

export default class EventsSection extends Component {
    constructor () {
        super()
        this.state = { mouseX: 0, mouseY: 0 }
    }

    // Al utilizar el arrow function handleMouseMove contiene el contexto del componente
    // Events.
    // Las funciones de eventos tienen que tener bien enlazado el contexto
    handleMouseMove = (e) => {
        const { clientX, clientY } = e
        this.setState({ mouseX: clientX, mouseY: clientY })
    }

    render () {
        return (
            <div onMouseMove={ this.handleMouseMove }
                 style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
                     <p>{this.state.mouseX}, {this.state.mouseY}</p>
            </div>
        )
    }
}