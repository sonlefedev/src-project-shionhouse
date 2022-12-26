import { useContext } from 'react';
import { SliderContext } from './SliderProvider';

export default function useSliderStore() {
    return useContext(SliderContext);
}
