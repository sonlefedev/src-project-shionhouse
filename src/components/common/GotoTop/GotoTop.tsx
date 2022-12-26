import classNames from 'classnames/bind';
import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
const GotoTop = (props: Props) => {
    const [hidden, setHidden] = React.useState<boolean>(true);

    const handleScroll = () => {
        const winScroll = Math.floor(document.body.scrollTop || document.documentElement.scrollTop);
        if (winScroll > 300) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleButtonClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (
        <button onClick={handleButtonClick} className={cx('go-top-btn', 'reset-btn', hidden && 'hidden')}>
            <BsArrowUpCircle className={cx('icon')} />
        </button>
    );
};

export default GotoTop;
