import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicDocumentCard from './BasicDocumentCard';
import DocumentCardWithoutImage from './DocumentCardWithoutImage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BasicDocumentCard/>
          <DocumentCardWithoutImage/>
      </div>
    );
  }
}

export default App;
