import React, { Component } from 'react';
import './main.scss';

import { Numbers } from './numbers';
import { StatusMessage } from "./statusMessage";
import { Counter } from "./counter";

export class Main extends Component {
    render() {
        return (
            <main className="main">
                    <p>Main</p>
                    <Numbers from="2" to="9" even/>
                    <StatusMessage />
                    <StatusMessage valid/>
                    <Counter />
            </main>
        );
    }
}