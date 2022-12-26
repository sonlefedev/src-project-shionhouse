import { useContext } from 'react';
import { BodyContext } from './BodyProvider';

export default function useBodyStore() {
    return useContext(BodyContext);
}
