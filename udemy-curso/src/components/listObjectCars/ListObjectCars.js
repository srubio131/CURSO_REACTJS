import React, { Component } from 'react';
import cars from './cars.json'

class CarItem extends Component {
    render () {
        const { car } = this.props

        return (
            <li>
                <p><strong>Nombre: </strong>{ car.name }</p>
                <p><strong>Marca: </strong>{ car.company }</p>
            </li>
        )
    }
}

export default class ListObjectCars extends Component {
    render () {
        return (
            <div>
                <ul>
                    { 
                        cars.map((car) => {
                            return <CarItem key={ car.id } car={car} />
                        })
                    }
                </ul>
            </div>
        )
    }
}