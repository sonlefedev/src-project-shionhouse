import { useContext } from 'react';
import { FooterContext } from './FooterProvider';

export default function useFooterStore() {
    return useContext(FooterContext);
}
