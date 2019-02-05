import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicDocumentCard from './BasicDocumentCard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BasicDocumentCard/>
      </div>
    );
  }
}

export default App;
