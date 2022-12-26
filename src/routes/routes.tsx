import About from '../page/About/About';
import BlogPage from '../page/Blog';
import BlogDetailsPage from '../page/BlogDetails';
import Contact from '../page/Contact';
import HomePage from '../page/HomePage';
import ProductDetailsPage from '../page/ProductDetails';
import ShopPage from '../page/ShopPage';
import { IRoutes } from './type';

const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/blog',
        element: <BlogPage />,
    },
    {
        path: '/blog-details',
        element: <BlogDetailsPage />,
    },
    {
        path: '/product-details',
        element: <ProductDetailsPage />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
] as IRoutes[];

export default routes;
