import React, { Component } from 'react';

export default class BoxPropChildren extends Component {
    render () {
        return (
            <div style={{ border: '1px solid #09f', margin: 5, padding: 5 }}>
                { this.props.children }
            </div>
        )
    }
}