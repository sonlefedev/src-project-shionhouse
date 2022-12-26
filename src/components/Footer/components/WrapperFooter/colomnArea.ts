import { v4 } from 'uuid';

const columnArea: {
    id: string;
    title: string;
    items: {
        id: string;
        link: string;
        text: string;
    }[];
}[] = [
    {
        id: v4(),
        title: 'Quick links',
        items: [
            {
                id: v4(),
                link: '#',
                text: 'Image Licensin',
            },
            {
                id: v4(),
                link: '#',
                text: 'Style Guide',
            },
            {
                id: v4(),
                link: '#',
                text: 'Privacy Policy',
            },
        ],
    },
    {
        id: v4(),
        title: 'Shop Category',
        items: [
            {
                id: v4(),
                link: '#',
                text: 'Image Licensin',
            },
            {
                id: v4(),
                link: '#',
                text: 'Style Guide',
            },
            {
                id: v4(),
                link: '#',
                text: 'Privacy Policy',
            },
        ],
    },
    {
        id: v4(),
        title: 'Pertners',
        items: [
            {
                id: v4(),
                link: '#',
                text: 'Image Licensin',
            },
            {
                id: v4(),
                link: '#',
                text: 'Style Guide',
            },
            {
                id: v4(),
                link: '#',
                text: 'Privacy Policy',
            },
        ],
    },
    {
        id: v4(),
        title: 'Get in touch',
        items: [
            {
                id: v4(),
                link: '#',
                text: '(89) 982-278 356',
            },
            {
                id: v4(),
                link: '#',
                text: 'demo@colorlib.com',
            },
            {
                id: v4(),
                link: '#',
                text: '67/A, Colorlib, Green road, NYC',
            },
        ],
    },
];

export default columnArea;
