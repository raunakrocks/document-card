import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <DocumentCard onClickHref='http://google.com'>
            <DocumentCardPreview
              previewImages={ [
                {
                  previewImageSrc: require('./documentpreview.png'),
                  iconSrc: require('./iconppt.png'),
                  width: 318,
                  height: 196,
                  accentColor: '#ce4b1f'
                }
              ] }
            />
            <DocumentCardTitle title='This is document card title text'/>
            {/* <DocumentCardActivity
              activity='Created Feb 23, 2016'
              people={
                [
                  { name: 'Raunak', profileImageSrc: require('./avatarkat.png') }
                ]
              }
              /> */}
          </DocumentCard>
      </div>
    );
  }
}

export default App;
