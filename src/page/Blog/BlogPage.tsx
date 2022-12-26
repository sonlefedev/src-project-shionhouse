import classNames from 'classnames/bind';
import { v4 } from 'uuid';
import NotificationPage from '../../components/common/NotificationPage';
import Pagination from '../../components/common/Pagination';
import LayoutTwoOne from '../../layout/components/LayoutTwoOne';
import DefaultLayout from '../../layout/DefaultLayout';
import BlogItem from './components/BlogItem';
import InstagramFeed from './components/InstagramFeed';
import ListMediaPost from './components/ListMediaPost';
import Newsletter from './components/Newsletter';
import SearchArea from './components/SearchArea';
import SideBarCategory from './components/SideBarCategory';
import Tag from './components/Tag';
import WrapperCompSideBar from './components/WrapperCompSideBar';
import ListItemBlog from './listBlogItem';

import style from './style.module.scss';

type Props = {};
const cx = classNames.bind(style);
interface IComps {
    title?: string;
    id: string;
    comp: JSX.Element;
}

const BlogPage = (props: Props) => {
    const comps: IComps[] = [
        { id: v4(), comp: <SearchArea /> },
        { id: v4(), title: 'Category', comp: <SideBarCategory /> },
        { id: v4(), title: 'Recent Post', comp: <ListMediaPost /> },
        { id: v4(), title: 'Tag Clouds', comp: <Tag /> },
        { id: v4(), title: 'Instagram Feeds', comp: <InstagramFeed /> },
        { id: v4(), title: 'Newsletter', comp: <Newsletter /> },
    ];
    const renderComps = () => {
        return comps.map((item) => (
            <WrapperCompSideBar key={item.id} title={item.title}>
                {item.comp}
            </WrapperCompSideBar>
        ));
    };

    const renderItemBlogComp = () => {
        return (
            <>
                {ListItemBlog.map((item) => (
                    <BlogItem key={item.id} data={item} />
                ))}
                <Pagination />
            </>
        );
    };

    return (
        <DefaultLayout exclude={['Body', 'Slider', 'Navigation']} childrenPosition={1}>
            <NotificationPage
                listNotificationPage={[
                    {
                        id: v4(),
                        link: '/',
                        text: 'Home',
                    },
                    {
                        id: v4(),
                        link: '/blog',
                        text: 'Blog',
                    },
                ]}
                className={cx('mt-header')}
            />
            <div className={cx('container-body-blog_page')}>
                <LayoutTwoOne col_2={renderItemBlogComp()} col_1={renderComps()} />
            </div>
        </DefaultLayout>
    );
};

export default BlogPage;
