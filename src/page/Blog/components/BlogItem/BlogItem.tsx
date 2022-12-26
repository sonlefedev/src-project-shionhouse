import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import AreaLink from '../../../../components/common/AreaLink';

import style from './style.module.scss';
const cx = classNames.bind(style);

export interface IDataItemBlog {
    id: string;
    img: {
        srcThumb: string;
        date: {
            months: string;
            day: string;
            link: string;
        };
    };
    info: {
        title: string;
        des: string;
        post: {
            postBy: string;
            link: string;
        };
        cmnt: {
            commentCount: string;
            link: string;
        };
    };
}
type Props = {
    data: IDataItemBlog;
};

const BlogItem = (props: Props) => {
    const { data } = props;
    const { info } = data;
    const { cmnt, post } = info;
    return (
        <div className={cx('wrapper-item-blog')}>
            <div className={cx('img-area')}>
                <img src={data.img.srcThumb} alt='' />
                <div className={cx('date')}>
                    <a href={data.img.date.link}>
                        <h3>{data.img.date.day}</h3>
                        <p>{data.img.date.months}</p>
                    </a>
                </div>
            </div>
            <div className={cx('info-area')}>
                <Link to={'/blog-details'}>{data.info.title}</Link>
                <p>{data.info.des}</p>
                <AreaLink
                    data={{
                        user: { link: post.link, name: post.postBy },
                        comment: { link: cmnt.link, quantity: cmnt.commentCount },
                    }}
                />
            </div>
        </div>
    );
};

export default BlogItem;
