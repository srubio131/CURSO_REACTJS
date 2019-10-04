import React, { Component } from 'react';

// Componente Controlado. Los datos del formulario y el componente se centralizan en el estado del compenente "state"
export default class FormDescontrolado extends Component {
    constructor () {
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        const isChecked = e.target.checked
        this.setState({ inputTerms: isChecked})
        console.log('Checkbox changed. New value: ', isChecked)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* El atributo for se usa para mejorar la usabilidad del formulario. Cuando aprietes en el label se pondra el foco en el input
                        en Reactjs en vez de 'for' se usa 'htmlFor'
                    */}
                    <p>
                        <label htmlFor="name">Nombre:</label>
                        <input  id='name'
                                name='userName'
                                placeholder="Introduce el nombre"
                                value={this.state.inputName}
                                onChange={e => this.setState({ inputName: e.target.value })} />
                    </p>
                    <p>
                        <label htmlFor="twitter">Twitter:</label>
                        <input  id='twitter'
                                name='twitterAccount'
                                placeholder="Introduce tu Twitter" 
                                value={this.state.inputTwitter}
                                onChange={e => this.setState({ inputTwitter: e.target.value })} />
                    </p>
                    <p>
                        <label htmlFor="terms">
                            <input  type='checkbox'
                                    checked={this.state.inputTerms}
                                    onChange={this.handleChange}/>
                            Accepted terms
                        </label>
                    </p>
                    {/* En HTML el último botón de un formulario hace de submit por defecto (si no hay 'onSubmit' indicado) */}
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}