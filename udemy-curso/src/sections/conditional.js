import React, { Component } from 'react';

// Tambien en vez de poner el bind() en el constructor, se podria poner
// arrow function para que al setear el this.state tenga el contexto
// del componente y no del evento. Si no no funcionaría
function handleClick(event) {
    console.log(event)
    console.log(event.nativeEvent)

    // const alertText = (!this.state.userLogged) ? 'Iniciando sesión...' : 'Cerrando sesión...'
    alert('Iniciando sesión...')
}

class LogginButton extends Component {
    constructor(sta) {
        super()
        //this.setState({ userLogged: true })
        //this.handleClick = this.handleClick.bind(this)
    }

    render () {
        return <button onClick={handleClick.bind(this)}>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component {
    constructor() {
        super()
        //this.setState({ userLogged: false })
        //this.handleClick = this.handleClick.bind(this)
    }

    render () {
        return (
            <div>
                <p>Bienvenido, usuario!</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component {
    constructor(props) {
        super(props)
        this.state = { userLogged: false }
    }

    render () {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                { (this.state.userLogged) ? <LogoutButton /> : <LogginButton /> }
            </div>
        )
    }
}