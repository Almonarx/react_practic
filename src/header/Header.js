import React, { Component } from 'react';
import { Navigation } from './navigation';
import './header.scss';

export class Header extends Component {
    render() {
        return (
            <header className="header">
                Header
                <Navigation list={['Home', 'Products', 'Contacts']} />
            </header>
        );
    }
}
