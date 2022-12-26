import { useCallback, useRef } from 'react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { v4 } from 'uuid';
import SVG from '../../../static/image/svg';
import style from './style.module.scss';
import classNames from 'classnames/bind';
export interface IServiceProps {}
interface IService {
    id: string;
    icon: JSX.Element;
    title: string;
    des: string;
}

const cx = classNames.bind(style);

const Service = (props: IServiceProps) => {
    const [listService, setListService] = React.useState<IService[]>([]);

    const wpServiceRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const listSrv = [
            {
                id: v4(),
                icon: <SVG.ServiceIcon.ServiceIcon_1 className={style['icon']} />,
                title: 'Fast & Free Delivery 111',
                des: 'Free delivery on all orders',
            },
            {
                id: v4(),
                icon: <SVG.ServiceIcon.ServiceIcon_2 className={style['icon']} />,
                title: 'Fast & Free Delivery 222',
                des: 'Free delivery on all orders',
            },
            {
                id: v4(),
                icon: <SVG.ServiceIcon.ServiceIcon_3 className={style['icon']} />,
                title: 'Fast & Free Delivery 333',
                des: 'Free delivery on all orders',
            },
            {
                id: v4(),
                icon: <SVG.ServiceIcon.ServiceIcon_4 className={style['icon']} />,
                title: 'Fast & Free Delivery 444',
                des: 'Free delivery on all orders',
            },
        ];
        setListService(listSrv);
    }, []);

    const renderListService = useCallback(() => {
        return listService.map((item) => (
            <li className={style['item-service']} key={item.id}>
                <div className={style['wrapper-icon']}>{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.des}</p>
            </li>
        ));
    }, [listService]);

    const handleClickIcon = useCallback((type: 'left' | 'right') => {
        alert('call api');
    }, []);
    return (
        <div className={style['wrapper-service']} ref={wpServiceRef}>
            <div onClick={() => handleClickIcon('left')} className={cx('arrow', 'left')}>
                <HiOutlineChevronLeft className={cx('icon')} />
            </div>
            <div onClick={() => handleClickIcon('right')} className={cx('arrow', 'right')}>
                <HiOutlineChevronRight className={cx('icon')} />
            </div>
            <ul className={style['list-service']}>{renderListService()}</ul>
        </div>
    );
};

export default Service;
