import React, { Component } from 'react';
import './numbers.scss';

export class Numbers extends Component {
    getNumbers() {
        const arr = [];

        for (let i = +this.props.from; i <= +this.props.to; i++) {
            arr.push(i);
        }

        if (this.props.hasOwnProperty('odd')) return arr.filter(val => val % 2);
        if (this.props.hasOwnProperty('even')) return arr.filter(val => !(val % 2));

        return arr;
    }

    render() {
        return (
            <ul className="numbers">
                {
                    this.getNumbers().map( (item, i) => (
                            <li key={i}>
                                {item}
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}
