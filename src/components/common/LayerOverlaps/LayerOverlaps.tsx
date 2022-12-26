import React from 'react';
import LayerOverlapsArea from './components/LayerOverlapsArea';
import LayerOverlapsProvider from './LayerOverlapsProvider';

export interface ILayerOverlapsProps {}

const LayerOverlaps = (props: React.PropsWithChildren<ILayerOverlapsProps>) => {
    return (
        <LayerOverlapsProvider>
            <LayerOverlapsArea>{props.children}</LayerOverlapsArea>
        </LayerOverlapsProvider>
    );
};

export default LayerOverlaps;
