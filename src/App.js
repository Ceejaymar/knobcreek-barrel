import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="main-shit">
        <Navbar />
        <Header />
        <CardContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
