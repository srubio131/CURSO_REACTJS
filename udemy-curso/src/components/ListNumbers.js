import React, { Component } from 'react';

export default class ListNumbers extends Component {
    render () {
        const numbers = [1, 1, 1, 2, 3, 4];

        return (
            <div>
                { numbers.map((number, index) => {
                    return <p key={index}>Soy el número {number}</p>
                })}
            </div>
        )
    }
}