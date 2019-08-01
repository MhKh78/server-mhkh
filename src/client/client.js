// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// ReactDOM.hydrate is new and can be used instead of render
// FOR SSR ????
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
