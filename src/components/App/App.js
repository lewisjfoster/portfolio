import React from 'react';

import './App.css';
import Home from '../sections/Home';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';

const App = () => {
    return (
        <>
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
        </>
    );
};

export default App;
