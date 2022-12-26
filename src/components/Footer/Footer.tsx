import React from 'react';
import BodyProvider from '../Body/BodyProvider';
import WrapperFooter from './components/WrapperFooter';

type Props = {};

const Footer = (props: Props) => {
    return (
        <BodyProvider>
            <WrapperFooter />
        </BodyProvider>
    );
};

export default Footer;
