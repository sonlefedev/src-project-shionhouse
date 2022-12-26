import { AiFillStar } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import image from '../../../../static/image';
import { useCallback, useMemo } from 'react';
import Button from '../../../common/Button';
import ICssProperties from '../../../../style/type/cssProperties';

interface IArrivalProps {
    hiddenTitle?: boolean;
    styleWrapper?: ICssProperties;
    styleItem?: ICssProperties;
}
interface IListNewArrival {
    id: string;
    link: string;
    thumb: string;
    title: string;
    rating: { id: string; comp: any }[];
    price: string;
}

const cx = classNames.bind(style);

const Arrival = (props: IArrivalProps) => {
    const { hiddenTitle, styleWrapper, styleItem } = props;
    const listNewArrival = useMemo(() => {
        return [
            {
                id: uuidv4(),
                thumb: image.arrival.image_1,
                link: '/product-details',
                title: 'Knitted Jumper',
                rating: [
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                ],
                price: '$ 30.00',
            },
            {
                id: uuidv4(),
                thumb: image.arrival.image_2,
                link: '/product-details',
                title: 'Knitted Jumper',
                rating: [
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                ],
                price: '$ 25.00',
            },
            {
                id: uuidv4(),
                thumb: image.arrival.image_3,
                link: '/product-details',
                title: 'Knitted Jumper',
                rating: [
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                ],
                price: '$ 25.00',
            },
            {
                id: uuidv4(),
                thumb: image.arrival.image_4,
                link: '/product-details',
                title: 'Knitted Jumper',
                rating: [
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                ],
                price: '$ 30.00',
            },
            {
                id: uuidv4(),
                thumb: image.arrival.image_5,
                link: '/product-details',
                title: 'Knitted Jumper',
                rating: [
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                ],
                price: '$ 25.00',
            },
            {
                id: uuidv4(),
                thumb: image.arrival.image_6,
                link: '/product-details',
                title: 'Knitted Jumper',
                rating: [
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                ],
                price: '$ 25.00',
            },
            {
                id: uuidv4(),
                thumb: image.arrival.image_7,
                link: '/product-details',
                title: 'Knitted Jumper',
                rating: [
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                ],
                price: '$ 30.00',
            },
            {
                id: uuidv4(),
                thumb: image.arrival.image_8,
                link: '/product-details',
                title: 'Knitted Jumper',
                rating: [
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                    { id: uuidv4(), comp: <AiFillStar /> },
                ],
                price: '$ 25.00',
            },
        ] as IListNewArrival[];
    }, []);

    const renderItemLi = useCallback(() => {
        return listNewArrival.map((item) => {
            return (
                <li style={styleItem} className={cx('item')} key={item.id}>
                    <div className={cx('thumb')}>
                        <img src={item.thumb} alt='' />
                        <div className={cx('cart-icon')}>
                            <BsCart />
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <Link to={item.link} className={cx('title')}>
                            Knitted Jumper
                        </Link>
                        <ul className={cx('rating')}>
                            {item.rating.map((item) => (
                                <li key={item.id}>{item.comp}</li>
                            ))}
                        </ul>
                        <span>{item.price}</span>
                    </div>
                </li>
            );
        });
    }, [listNewArrival, styleItem]);
    return (
        <div style={styleWrapper} className={cx('arrival-wrapper')}>
            {hiddenTitle ? null : (
                <div className={cx('heading')}>
                    <h1>new arrival</h1>
                </div>
            )}
            <ul className={cx('list-item')}>{renderItemLi()}</ul>
            <div className={cx('footer')}>
                <Button
                    p='17px 42px'
                    hoverEffect={2}
                    text_color='var(--primary-color)'
                    border_color='var(--primary-color)'
                    text_color_hover='#fff'
                    br_color='transparent'
                    primary={true}
                >
                    Learn More
                </Button>
            </div>
        </div>
    );
};

export default Arrival;
