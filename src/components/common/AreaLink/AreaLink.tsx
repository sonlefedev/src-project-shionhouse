import classNames from 'classnames/bind';
import { FaUserAlt, FaComment } from 'react-icons/fa';
import style from './style.module.scss';
type Props = {
    data: {
        user: {
            name: string;
            link: string;
        };
        comment: {
            quantity: string;
            link: string;
        };
    };
};
const cx = classNames.bind(style);

const AreaLink = (props: Props) => {
    const { data } = props;
    const { comment, user } = data;
    return (
        <div className={cx('area-link')}>
            {/* user */}
            <a href={user.link}>
                <FaUserAlt className={cx('icon')} />
                {user.name}
            </a>
            {/* comments  */}
            <div className={cx('bulkhead')}></div>
            <a href={comment.link}>
                <FaComment className={cx('icon')} />
                {comment.quantity.length === 1 ? `0${comment.quantity}` : comment.quantity} Comments
            </a>
        </div>
    );
};

export default AreaLink;
