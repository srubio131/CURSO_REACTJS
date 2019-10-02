import React from 'react';

function Text(props) {
    const { arrayOfNumbers, boolean, element, multiplyFunc, number, text, objectWithInfo } = props;
  
    const textoSegundoBool = boolean ? 'Cierto' : 'Falso';
    const mappedNumbers = arrayOfNumbers.map(multiplyFunc);
    return (
            <div>
              <p>{text}</p>
              <p>{number}</p>
              <p>{textoSegundoBool}</p>
              <p>{mappedNumbers.join(', ')}</p>
              <p>{objectWithInfo.key}</p>
              {element}
           </div>
    )
  }

  export default Text;