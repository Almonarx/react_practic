import React, { Component } from 'react';
import './sidebar.scss';

import { Greet } from './greet';
import { UsersList } from "./usersList";

export class Sidebar extends Component {
    constructor() {
        super();

        this.users = [
            {id: 123, name: 'Patrik', age: 42},
            {id: 46, name: 'Teresa', age: 24},
            {id: 789, name: 'John', age: 12}
        ];
    }

    render() {
        return (
            <aside className="sidebar">
                <p>Sidebar</p>
                <Greet name="Taras"/>
                <UsersList list={this.users}/>
            </aside>
        );
    }
}
