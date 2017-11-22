import React from 'react';
import './main.scss';

import { Numbers } from './numbers';
import { StatusMessage } from "./statusMessage";
import { Counter } from "./counter";

export const Main = () => (
    <main className="main">
        <p>Main</p>
        <Numbers from="2" to="9" even/>
        <StatusMessage />
        <StatusMessage valid/>
        <Counter />
    </main>
);
