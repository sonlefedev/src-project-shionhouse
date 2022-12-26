import { useState, createContext, useEffect } from 'react';
import { PropsWithChildren } from 'react';

interface ILayerOverlapsProviderProps {}

export const LayerOverlapsContext = createContext<{
    visibleOverLaps: boolean;
    displayOverLaps: () => void;
    hiddenOverLaps: () => void;
}>({} as any);

const LayerOverlapsProvider = (props: PropsWithChildren<ILayerOverlapsProviderProps>) => {
    const { children } = props;
    const [visibleOverLaps, setVisibleOverLaps] = useState<boolean>(false);

    const displayOverLaps = () => {
        setVisibleOverLaps(true);
    };
    const hiddenOverLaps = () => {
        setVisibleOverLaps(false);
    };

    return (
        <LayerOverlapsContext.Provider
            value={{
                visibleOverLaps,
                displayOverLaps,
                hiddenOverLaps,
            }}
        >
            {children}
        </LayerOverlapsContext.Provider>
    );
};

export default LayerOverlapsProvider;
