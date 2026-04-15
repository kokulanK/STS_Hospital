import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NextSteps from './components/NextSteps';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
}

export default App;