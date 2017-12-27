import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import './index.scss';

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
