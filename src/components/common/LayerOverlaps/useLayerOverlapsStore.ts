import { useContext } from 'react';
import { LayerOverlapsContext } from './LayerOverlapsProvider';
const useLayerOverlapsStore = () => {
    return useContext(LayerOverlapsContext);
};

export default useLayerOverlapsStore;
