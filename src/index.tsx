import ReactDOM from 'react-dom';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import App from './components/App';

ReactDOM.render((
    <Routes>
        <Route path="/" element={ <App/> }/>
    </Routes>

), document.getElementById('root'));
