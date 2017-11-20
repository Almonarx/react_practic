import React from 'react';
import './sidebar.scss';

import { Greet } from './greet';

export const Sidebar = () => (
    <aside className="sidebar">
        <p>Sidebar</p>
        <Greet name="Taras"/>
    </aside>
);
