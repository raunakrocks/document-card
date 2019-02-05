import React, { Component } from 'react';
import './App.css';
import BasicDocumentCard from './BasicDocumentCard';
import DocumentCardWithoutImage from './DocumentCardWithoutImage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BasicDocumentCard/>
          <br/> <br/> <br/> <br/>
          <DocumentCardWithoutImage/>
      </div>
    );
  }
}

export default App;
