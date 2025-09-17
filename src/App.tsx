import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Impact from './components/Impact';
import Donate from './components/Donate';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Events />
      <Impact />
      <Donate />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;