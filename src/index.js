import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import App from './components/App';
import Data from './components/Data';

import './index.css';
import './lib/bootstrap-grid.min.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/calendar' element={<App />} />
                <Route path='/data' element={<Data />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
