import React from 'react';
import './error.scss';

export const Error = props => <mark style={ {color: props.color} }>{props.text || 'Error'}</mark>;
