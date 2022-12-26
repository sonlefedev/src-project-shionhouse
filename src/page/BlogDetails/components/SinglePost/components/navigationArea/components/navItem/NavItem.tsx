import classNames from 'classnames/bind';
import style from './style.module.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
type Props = {
    className?: string;

    type?: 'prev' | 'next';

    data?: {
        link: string;
        title: string;
        thumbSrc: string;
    };
};
const cx = classNames.bind(style);
const NavItem = (props: Props) => {
    const { type, data } = props;
    return (
        <div
            className={cx('wrapper-nav-item', props.className)}
            style={
                (type === 'next' && {
                    flexDirection: 'row-reverse',
                }) ||
                {}
            }
        >
            <a href={data?.link} className={cx('thumb-area')}>
                <img src={data?.thumbSrc} alt='' />
                <div className={cx('layout-overlaps')}>
                    {type === 'prev' ? <AiOutlineArrowLeft /> : type === 'next' ? <AiOutlineArrowRight /> : ''}
                </div>
            </a>
            <div
                className={cx('text-area')}
                style={
                    (type === 'next' && {
                        alignItems: 'flex-end',
                    }) ||
                    {}
                }
            >
                <span>{type === 'prev' ? 'Prev Post' : type === 'next' ? 'Next Post' : ''}</span>
                <a href={data?.link}>{data?.title}</a>
            </div>
        </div>
    );
};

export default NavItem;
