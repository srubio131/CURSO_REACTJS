import React, { Component } from 'react'

export function CounterComponent({counter, increment, decrement}) {
  return (
    <div>
      <div>
        Contador: <span>{counter}</span>
      </div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
