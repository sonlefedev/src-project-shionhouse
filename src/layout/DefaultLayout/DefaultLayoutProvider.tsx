import { createContext, PropsWithChildren } from 'react';

export interface IDefaultLayoutProvider {}

export const DefaultLayoutContext = createContext<{}>({} as any);

const DefaultLayoutProvider = (props: PropsWithChildren<IDefaultLayoutProvider>) => {
    return <DefaultLayoutContext.Provider value={{}}>{props.children}</DefaultLayoutContext.Provider>;
};

export default DefaultLayoutProvider;
