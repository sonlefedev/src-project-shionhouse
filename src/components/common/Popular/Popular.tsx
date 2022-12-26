import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import image from '../../../static/image';
import style from './style.module.scss';
import Button from '../Button';
import { useCallback, useMemo } from 'react';

interface IPopularProps {}
interface IListPopular {
    link: string;
    id: string;
    src: string;
    title: string;
}

const cx = classNames.bind(style);

const Popular = (props: IPopularProps) => {
    const listPopular = useMemo(() => {
        return [
            {
                id: uuidv4(),
                link: '/shop',
                title: 'glasses',
                src: image.popular.image_1,
            },
            {
                id: uuidv4(),
                link: '/shop',
                title: 'watches',
                src: image.popular.image_2,
            },
            {
                id: uuidv4(),
                link: '/shop',
                title: 'jackets',
                src: image.popular.image_3,
            },
            {
                id: uuidv4(),
                link: '/shop',
                title: 'clothes',
                src: image.popular.image_4,
            },
        ] as IListPopular[];
    }, []);

    const renderItemLi = useCallback(() => {
        return listPopular.map((item) => (
            <li key={item.id} className={cx('wrapper-item')}>
                <div className={cx('item')}>
                    <img src={item.src} alt='' />

                    <div className={cx('navigate')}>
                        <Button to={item.link} primary={true} hoverEffect={1}>
                            Shop now
                        </Button>
                    </div>

                    <div className={cx('title')}>
                        <p>{item.title}</p>
                    </div>
                </div>
            </li>
        ));
    }, [listPopular]);

    return (
        <div className={cx('popular-wrapper')}>
            <ul className={cx('list-item')}>{renderItemLi()}</ul>
        </div>
    );
};

export default Popular;
