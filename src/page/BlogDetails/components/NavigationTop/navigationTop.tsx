import classNames from 'classnames/bind';
import { FaHeart } from 'react-icons/fa';
import SocialIcon from '../../../../components/common/SocialIcon';
import NavigationArea from '../SinglePost/components/navigationArea';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
const NavigationTop = (props: Props) => {
    return (
        <div className={cx('wrapper-navigation-top')}>
            <div className={cx('top')}>
                <p>
                    <FaHeart className={cx('icon')} /> Lily and 4 people like this
                </p>
                <SocialIcon />
            </div>
            <div className={cx('bottom')}>
                <NavigationArea />
            </div>
        </div>
    );
};

export default NavigationTop;
