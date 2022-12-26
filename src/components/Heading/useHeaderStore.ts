import { useContext } from 'react';
import { HeaderContext } from './HeaderProvider';

export default function useHeaderStore() {
    return useContext(HeaderContext);
}
