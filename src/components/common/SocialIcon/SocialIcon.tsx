import classNames from 'classnames/bind';
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import { v4 } from 'uuid';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
const SocialIcon = (props: Props) => {
    const SocialIcons = [
        { id: v4(), link: '#', icon: <FaFacebookF /> },
        { id: v4(), link: '#', icon: <FaTwitter /> },
        { id: v4(), link: '#', icon: <FaDribbble /> },
        { id: v4(), link: '#', icon: <FaBehance /> },
    ];

    const renderSocialIcon = () =>
        SocialIcons.map((item) => (
            <li key={item.id}>
                <a href={item.link}>{item.icon}</a>
            </li>
        ));

    return <ul className={cx('wrapper-socialIcon')}>{renderSocialIcon()}</ul>;
};

export default SocialIcon;
