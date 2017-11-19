import React from 'react';
import './greet.scss';

export const Greet = (props) => {
    const hour = new Date().getHours();

    let greet;

    switch (true) {
        case hour >= 3 && hour < 12:
            greet = 'Good morning!';
            break;
        case hour >= 12 && hour < 18:
            greet = 'Good day!';
            break;
        case hour >= 18 && hour < 22:
            greet = 'Good evening!';
            break;
        default:
            greet = 'Good night!';
            break;
    }

    if (props.name) {
        greet = greet.replace('!', `, ${props.name}!`);
    }

    return (
        <p className="greet">
            {greet}
        </p>
    );
};


