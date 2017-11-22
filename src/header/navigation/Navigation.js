import React from 'react';
import './navigation.scss';

const items =['Home', 'Gallery', 'Contacts'];

export const Navigation = (props) => (
        <nav className="main-nav">
            <ul>
                {
                    items.map((item, i) => (
                    <li key={i}>
                    <a href={`/${item.toLocaleLowerCase()}`}>{item}</a>
                    </li>
                        )
                    )
                }

                {/*<li><a href="/home">Home</a></li>
                {
                    props.islogin && <li><a href="/logout">Logout</a></li>
                }*/}
            </ul>
        </nav>
);
