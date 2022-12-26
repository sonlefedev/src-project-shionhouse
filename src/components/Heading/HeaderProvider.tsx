import { createContext, PropsWithChildren } from 'react';

export interface IHeaderProviderProps {}

export const HeaderContext = createContext<{}>({} as any);

const HeaderProvider = (props: PropsWithChildren<IHeaderProviderProps>) => {
    return <HeaderContext.Provider value={{}}>{props.children}</HeaderContext.Provider>;
};

export default HeaderProvider;
