import React, { Component } from 'react';

const Users = props => <li>{`Name: ${props.user.name}. Age: ${props.user.age}`}</li>;

export const UsersList = props => (
    <ul>
        {
            props.list.map(item => <Users key={item.id} user={item}/>)
        }
    </ul>
);
