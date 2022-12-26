import classNames from 'classnames/bind';
import { v4 } from 'uuid';
import NotificationPage from '../../components/common/NotificationPage';
import DefaultLayout from '../../layout/DefaultLayout';
import InstagramFeed from '../Blog/components/InstagramFeed';
import ListMediaPost from '../Blog/components/ListMediaPost';
import Newsletter from '../Blog/components/Newsletter';
import SearchArea from '../Blog/components/SearchArea';
import SideBarCategory from '../Blog/components/SideBarCategory';
import Tag from '../Blog/components/Tag';
import SinglePost from './components/SinglePost';
import NavigationTop from './components/NavigationTop';
import WrapperCompSideBar from './components/WrapperCompSideBar';

import style from './style.module.scss';
import BlogAuthor from './components/BlogAuthor';
import CommentArea from './components/CommentArea';
import listFeedBack from './components/comments';
import CommentForm from '../../components/common/CommentForm';

type Props = {};
const cx = classNames.bind(style);
interface IComps {
    title?: string;
    id: string;
    comp: JSX.Element;
}

const BlogDetailsPage = (props: Props) => {
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

    return (
        <DefaultLayout exclude={['Body', 'Slider', 'Navigation']} childrenPosition={1}>
            <div className={cx('container-body-blog_page')}>
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
                        {
                            id: v4(),
                            link: '/blog-details',
                            text: 'Blog Details',
                        },
                    ]}
                />
                <div className={cx('wrapper-blog')}>
                    <div className={cx('left')}>
                        <SinglePost />
                        <NavigationTop />
                        <BlogAuthor />
                        <CommentArea data={listFeedBack} />
                        <CommentForm />
                    </div>
                    <div className={cx('right')}>{renderComps()}</div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default BlogDetailsPage;
