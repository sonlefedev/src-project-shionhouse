import { createContext, PropsWithChildren } from 'react';

export interface IFooterProvider {}

export const FooterContext = createContext<{}>({} as any);

const FooterProvider = (props: PropsWithChildren<IFooterProvider>) => {
    return <FooterContext.Provider value={{}}>{props.children}</FooterContext.Provider>;
};

export default FooterProvider;
