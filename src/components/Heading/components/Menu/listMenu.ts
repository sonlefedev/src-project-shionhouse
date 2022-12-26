export interface IItemMenu {
    text: string;
    path: string;
    children?: IItemMenu[];
}

const listMenu: IItemMenu[] = [
    {
        path: '/',
        text: 'home',
    },
    {
        path: '/shop',
        text: 'shop',
    },
    {
        path: '/about',
        text: 'about',
    },
    {
        path: '/blog',
        text: 'blog',
        children: [
            {
                path: '/blog',
                text: 'Blog',
            },
            {
                path: '/blog-details',
                text: 'Blog Details',
            },
            {
                path: '/product-details',
                text: 'Product Details',
            },
        ],
    },
    {
        path: '/contact',
        text: 'contact',
    },
];

export default listMenu;
