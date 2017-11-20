import React from 'react';

import { Header } from './header';
import { Main } from './main';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

import { Error } from './error';

import './app.scss';

export const App = (
    <div className="container">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
    </div>
);