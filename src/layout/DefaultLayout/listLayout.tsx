import { useRef } from 'react';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Slider from '../../components/Slider';
import { DefaultLayoutType } from './type';

export interface LayoutObject {
    id: DefaultLayoutType.exclude;
    component?: React.MutableRefObject<JSX.Element>;
    componentChild?: React.ReactNode;
    isChild?: boolean;
}

const ListLayout = () => {
    const headingRef = useRef(<Heading />);
    const slideRef = useRef(<Slider />);
    const bodyRef = useRef(<Body />);
    const footerRef = useRef(<Footer />);

    const listLayout: LayoutObject[] = [
        { id: 'Header', component: headingRef },
        { id: 'Slider', component: slideRef },
        { id: 'Body', component: bodyRef },
        { id: 'Footer', component: footerRef },
    ];

    return listLayout;
};

export default ListLayout;
