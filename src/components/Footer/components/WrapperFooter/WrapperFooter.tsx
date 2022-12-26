import classNames from 'classnames/bind';
import { useCallback } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import image from '../../../../static/image';
import Social from '../../../common/Social/Social';
import columnArea from './colomnArea';
import style from './style.module.scss';
interface IWrapperFooterProps {}
const cx = classNames.bind(style);
const WrapperFooter = (props: IWrapperFooterProps) => {
    const renderColumn = useCallback(() => {
        return columnArea.map((item) => (
            <li key={item.id} className={cx('footer-caption', 'item-footer')}>
                <h4>{item.title}</h4>
                <ul>
                    {item.items.map((elem) => (
                        <li key={elem.id}>
                            <a href={elem.link} className={cx('link')}>
                                {elem.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        ));
    }, []);
    return (
        <div className={style['wrapper-footer']}>
            <ul className={style['footer-area']}>
                <li className={cx('footer-caption', 'item-footer')}>
                    <div className={style['footer-logo']}>
                        <img src={image.logo_white} alt='' />
                    </div>
                    <p>
                        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                        dolor interdum nulla.
                    </p>
                    <Social iconColor='#fff' iconColorHover='#fff' backgroundHover='var(--primary-color)' />
                </li>
                {renderColumn()}
            </ul>
            <div className={cx('footer-bottom')}>
                <p>
                    Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with
                    <AiFillHeart className={cx('icon')} />
                    by
                    <a href={'#'}>SonLe</a>
                </p>
            </div>
        </div>
    );
};

export default WrapperFooter;
