import React from 'react';

type ICssProperties = React.CSSProperties & {
    [p: string]: string | number | undefined;
};

export default ICssProperties;
