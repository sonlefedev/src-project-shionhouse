import React from 'react';

type TComponent = React.ReactElement<any, any>;

const InformationComp = (Component: TComponent) => {
    const Comp = Component as any as (props: any) => JSX.Element;
    return <Comp />;
};

export default InformationComp;
