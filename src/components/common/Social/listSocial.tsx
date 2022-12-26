import { FaFacebookF, FaYoutube, FaPinterest, FaTwitter } from 'react-icons/fa';

export interface ISocialMenu {
    path: string;
    icon: any;
}

const listSocial: ISocialMenu[] = [
    {
        path: 'https://www.facebook.com/',
        icon: <FaFacebookF />,
    },
    {
        path: 'https://www.youtube.com/',
        icon: <FaYoutube />,
    },
    {
        path: 'https://www.pinterest.com/',
        icon: <FaPinterest />,
    },
    {
        path: 'https://twitter.com/',
        icon: <FaTwitter />,
    },
];

export default listSocial;
