
import React from 'react';
import './styles/styles.css';

import Header from './components/Header';
import CalmIntro from './components/CalmIntro';
import CalmCards from './components/CalmCards';
import CalmInfo from './components/CalmInfo';
import CalmMailForm from './components/CalmMailForm.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CalmIntro />
      <CalmCards />
      <CalmInfo />
      <CalmMailForm />
      <Footer />
    </div>
  );
}

export default App;
