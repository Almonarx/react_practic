import React from 'react';
import './numbers.scss';

export const Numbers = (props) => {
    const arr = [];

    switch (true) {
        case props.hasOwnProperty('odd'):
            for (let i = +props.from; i <= +props.to; i++) {
                if (i % 2) arr.push(i);
            }
            break;

        case props.hasOwnProperty('even'):
            for (let i = +props.from; i <= +props.to; i++) {
                if (!(i % 2)) arr.push(i);
            }
            break;

        default:
            for (let i = +props.from; i <= +props.to; i++) {
                arr.push(i);
            }
            break;
    }


    return (
        <ul className="numbers">
            {
                arr.map( (item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                    )
                )
            }
        </ul>
    );
};
