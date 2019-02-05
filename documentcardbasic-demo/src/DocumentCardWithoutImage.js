import React, { Component } from 'react';
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardDetails,
    DocumentCardImage,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardLogo,
    DocumentCardStatus,
    IDocumentCardPreviewProps,
    IDocumentCardLogoProps
  } from 'office-ui-fabric-react/lib/DocumentCard';
  import { ImageFit } from 'office-ui-fabric-react/lib/Image';
  import {TestImages} from './common/TestImages.ts';


class DocumentCardWithoutImage extends Component {
    render() {
        return (
            <div>
                <DocumentCard onClickHref='http://google.com'>
                    <DocumentCardImage
                        height={150}
                        imageFit={ImageFit.cover}
                        iconProps = {{
                            iconName: '',
                            styles: { root: { color: '#813a7c', fontSize: '120px', width: '120px', height: '120px' } }
                        }}
                        imageSrc={TestImages.documentPreviewTwo}
                    />
                    <DocumentCardDetails>
                        <DocumentCardTitle title="How to make good design without an image" shouldTruncate={true} />
                    </DocumentCardDetails>
                    <DocumentCardActivity
                        activity="Modified January 1, 2019"
                        people={[{ name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' }]}
                    />
                </DocumentCard>
        </div>
        );
    }
}
export default DocumentCardWithoutImage;