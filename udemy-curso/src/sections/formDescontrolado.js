import React, { Component } from 'react';

// Componente descontrolado. Parecido a como se hace con HTML y javascript puro
export default class FormDescontrolado extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const name  = this.inputName.value
        const email = this.inputTwitter.value
        const terms = this.inputTerms.checked
        console.log({ name, email, terms })
    }

    handleChange = (e) => {
        console.log('Checkbox changed. New value: ', e.target.checked)
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
                                ref={inputElement => this.inputName = inputElement} />
                    </p>
                    <p>
                        <label htmlFor="twitter">Twitter:</label>
                        <input  id='twitter'
                                name='twitterAccount'
                                placeholder="Introduce tu Twitter" 
                                ref={inputElement => this.inputTwitter = inputElement}/>
                    </p>
                    <p>
                        <label htmlFor="terms">
                            <input  type='checkbox'
                                    ref={inputElement => this.inputTerms = inputElement}
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