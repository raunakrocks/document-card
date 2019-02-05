import React, { Component } from 'react';
import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity,
    IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';

class BasicDocumentCard extends Component {

    render() {
        return (
            <div>
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
                    <DocumentCardTitle title='This is basic document card title text'/>
                    <DocumentCardActivity
                    activity='Created Feb 23, 2016'
                    people={
                        [
                        { name: 'Raunak', profileImageSrc: require('./avatarkat.png') }
                        ]
                    }
                    />
                </DocumentCard>
        </div>
        );
    }
}
export default BasicDocumentCard;