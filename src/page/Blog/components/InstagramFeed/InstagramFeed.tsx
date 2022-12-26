import classNames from 'classnames/bind';
import { v4 } from 'uuid';
import image from '../../../../static/image';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {};

const InstagramFeed = (props: Props) => {
    const listInstagramFeed = [
        { thumbSrc: image.blog.instagramFeeds.img_1, link: '#', id: v4() },
        { thumbSrc: image.blog.instagramFeeds.img_2, link: '#', id: v4() },
        { thumbSrc: image.blog.instagramFeeds.img_3, link: '#', id: v4() },
        { thumbSrc: image.blog.instagramFeeds.img_4, link: '#', id: v4() },
        { thumbSrc: image.blog.instagramFeeds.img_5, link: '#', id: v4() },
        { thumbSrc: image.blog.instagramFeeds.img_6, link: '#', id: v4() },
    ];
    const renderListInstagramFeed = () => {
        return listInstagramFeed.map((item) => (
            <li key={item.id}>
                <a href={item.link}>
                    <img src={item.thumbSrc} alt='' />
                </a>
            </li>
        ));
    };
    return <ul className={cx('wrapper-InstagramFeed')}>{renderListInstagramFeed()}</ul>;
};

export default InstagramFeed;
