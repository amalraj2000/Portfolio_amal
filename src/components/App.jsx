import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Stats from './Stats';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
    return (
        <div className="antialiased bg-primary text-primary selection:bg-accent-blue selection:text-white">
            <Header />
            <main>
                <Hero />
                <Stats />
                <Experience />
                <Education />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
