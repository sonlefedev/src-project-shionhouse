import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import image from '../../../../static/image';
import Item from './Item';
import { IItemProps } from './Item/Item';
import style from './style.module.scss';

interface IPopularProductProps {
    className?: string;
}
const cx = classNames.bind(style);

const PopularProduct = (props: IPopularProductProps) => {
    const [listPopularProduct, setListPopularProduct] = useState<IItemProps[]>([]);

    useEffect(() => {
        setListPopularProduct([
            {
                id: v4(),
                title: `Established fact that by the
                readable content 1`,
                src: image.popularProduct.img_1,
                textBtn: 'Read more',
            },
            {
                id: v4(),
                title: `Established fact that by the
                readable content 2`,
                src: image.popularProduct.img_2,
                textBtn: 'Read more',
            },
        ]);
    }, []);

    const renderPopularProductElm = useCallback(() => {
        return (
            <ul className={cx('list-item')}>
                {listPopularProduct.map((item) => (
                    <Item key={item.id} id={item.id} src={item.src} textBtn={item.textBtn} title={item.title} />
                ))}
            </ul>
        );
    }, [listPopularProduct]);

    return <div className={cx('wrapper-popular-product', props.className)}>{renderPopularProductElm()}</div>;
};

export default PopularProduct;
