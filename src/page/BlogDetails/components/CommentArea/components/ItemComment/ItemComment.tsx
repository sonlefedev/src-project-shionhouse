import classNames from 'classnames/bind';
import style from './style.module.scss';

export interface IDataItemComment {
    id: string;
    avatarSrc: string;
    name: string;
    link: string;
    feedbackText: string;
    date: string;
}

type Props = {
    data: IDataItemComment;
};

const cx = classNames.bind(style);
const ItemComment = (props: Props) => {
    const { data } = props;
    return (
        <div className={cx('wrapper-item-comment')}>
            <div className={cx('avatar')}>
                <img src={data.avatarSrc} alt='' />
            </div>
            <div className={cx('text-area')}>
                <div className={cx('top')}>
                    <p>{data.feedbackText}</p>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('jam')}>
                        <a href={data.link} className={cx('name')}>
                            {data.name}
                        </a>
                        <p className={cx('date')}>{data.date}</p>
                    </div>
                    <a href={data.link} className={cx('reply')}>
                        Reply
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ItemComment;
