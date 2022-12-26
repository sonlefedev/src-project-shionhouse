import { createContext, PropsWithChildren } from 'react';

export interface ISliderProviderProps {}

export const SliderContext = createContext<{}>({} as any);

const SliderProvider = (props: PropsWithChildren<ISliderProviderProps>) => {
    return <SliderContext.Provider value={{}}>{props.children}</SliderContext.Provider>;
};

export default SliderProvider;
