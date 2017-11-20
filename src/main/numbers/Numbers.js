import React from 'react';
import './numbers.scss';

export const Numbers = (props) => {
    const getNumbers = () => {
      const arr = [];

      for (let i = +props.from; i <= +props.to; i++) {
          arr.push(i);
      }

      if (props.hasOwnProperty('odd')) return arr.filter(val => val % 2);
      if (props.hasOwnProperty('even')) return arr.filter(val => !(val % 2));

      return arr;
    };

    return (
        <ul className="numbers">
            {
                getNumbers().map( (item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                    )
                )
            }
        </ul>
    );
};
