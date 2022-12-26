import classNames from 'classnames/bind';
import image from '../../../../static/image';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
const BlogAuthor = (props: Props) => {
    return (
        <div className={cx('wrapper-blog-author')}>
            <div className={cx('avatar')}>
                <img src={image.blogDetails.avatar.img_1} alt='' />
            </div>
            <div className={cx('introduce')}>
                <a href='#' className={cx('name')}>
                    Harvard milan
                </a>
                <p className={cx('des')}>
                    Second divided from form fish beast made. Every of seas all gathered use saying you're, he our
                    dominion twon Second divided from
                </p>
            </div>
        </div>
    );
};

export default BlogAuthor;
