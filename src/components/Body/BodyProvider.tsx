import { createContext, PropsWithChildren } from 'react';

export interface IBodyProviderProps {}

export const BodyContext = createContext<{}>({} as any);

const BodyProvider = (props: PropsWithChildren<IBodyProviderProps>) => {
    return <BodyContext.Provider value={{}}>{props.children}</BodyContext.Provider>;
};

export default BodyProvider;
