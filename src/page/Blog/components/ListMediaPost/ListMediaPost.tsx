import classNames from 'classnames/bind';
import image from '../../../../static/image';
import style from './style.module.scss';

const cx = classNames.bind(style);
type Props = {};

interface IItemMediaPost {
    id: string;
    thumbSrc: string;
    title: string;
    createAt: string;
    linkTitle: string;
}

const ListMediaPost = (props: Props) => {
    const listMediaPost: IItemMediaPost[] = [
        {
            id: '1',
            linkTitle: '#',
            thumbSrc: image.blog.recentPost.img_1,
            title: 'From life was you fish...',
            createAt: 'January 12, 2019',
        },
        {
            id: '2',
            linkTitle: '#',
            thumbSrc: image.blog.recentPost.img_2,
            title: 'The Amazing Hubble',
            createAt: '02 Hours ago',
        },
        {
            id: '3',
            linkTitle: '#',
            thumbSrc: image.blog.recentPost.img_3,
            title: 'Astronomy Or Astrology',
            createAt: '03 Hours ago',
        },
        {
            id: '4',
            linkTitle: '#',
            thumbSrc: image.blog.recentPost.img_4,
            title: 'Asteroids telescope',
            createAt: '01 Hours ago',
        },
    ];
    const renderListMediaPost = () => {
        return listMediaPost.map((item) => (
            <li key={item.id}>
                <div className={cx('thumb')}>
                    <img src={item.thumbSrc} alt='' />
                </div>
                <div className={cx('info')}>
                    <a className={cx('title')} href={item.linkTitle}>
                        {item.title}
                    </a>
                    <p className={cx('createAt')}>{item.createAt}</p>
                </div>
            </li>
        ));
    };
    return <ul className={cx('wrapper-ListMediaPost')}>{renderListMediaPost()}</ul>;
};

export default ListMediaPost;
