import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './Articles';
import Tokens from './Tokens';

function NavbarComponent() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/articles' exact element={<Articles/>} />
                <Route path='/tokens' exact element={<Tokens/>} />
            </Routes>
        </Router>
    );
}

export default NavbarComponent;
