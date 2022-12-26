import classNames from 'classnames/bind';
import Button from '../../../../common/Button';
import style from './style.module.scss';

export interface IItemProps {
    id?: string;
    title?: string;
    textBtn?: string;
    src?: string;
    link?: string;
}

const cx = classNames.bind(style);

const Item = (props: IItemProps) => {
    const { src, title, textBtn, link } = props;
    return (
        <li className={cx('wrapper-item')}>
            <img src={src} alt='' />
            <div className={cx('detail-description')}>
                <a href={link || '#'}>{title}</a>
                <Button to='#' primary={true} hoverEffect={1}>
                    {textBtn}
                </Button>
            </div>
        </li>
    );
};

export default Item;
