import React from 'react';
import './main.scss';

import { Numbers } from './numbers';

export const Main = () => (
    <main className="main">
        <p>Main</p>
        <Numbers from="2" to="9"/>
    </main>
);
