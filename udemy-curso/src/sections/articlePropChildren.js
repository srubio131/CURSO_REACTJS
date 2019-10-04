import React, { Component } from 'react';
import BoxPropChildren from './boxPropChildren';
import PropTypes from 'prop-types'

export default class ArticlePropChildren extends Component {
    // Los PropTypes están disponibles en desarrollo.
    // En producción están totalmente deshabilitados
    static propTypes = {
        author: PropTypes.string.isRequired
    }

    render () {
        const { author, children, date, title } = this.props
        return (
            <section style={{ borderBottom: '1px solid #000', marginBottom: 50 }}>
                <h2>{title}</h2>
                <p><em>Escrito por {author}</em></p>
                <BoxPropChildren>{date}</BoxPropChildren>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}