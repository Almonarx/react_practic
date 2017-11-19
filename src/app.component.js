import React from 'react';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

import { Error } from './error';

import './app.scss';

export const App = (
    <div>
        <Header />
        <Error
            text="There is an error!"
            color="red"
        />
        <Main />
        <Footer />
    </div>
);