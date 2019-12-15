import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Carousel from './carousel'

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Carousel />, document.getElementById('container'))
    ReactDOM.render(<App />, document.getElementById('root'));
})

