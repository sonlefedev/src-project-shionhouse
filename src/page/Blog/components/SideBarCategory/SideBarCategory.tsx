import classNames from 'classnames/bind';
import { v4 } from 'uuid';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);

interface IListCategorySidebar {
    id: string;
    title: string;
    quantity: string;
    link: string;
}

const SideBarCategory = (props: Props) => {
    const listCategorySidebar: IListCategorySidebar[] = [
        {
            id: v4(),
            title: 'Resaurant food',
            quantity: '37',
            link: '#',
        },
        {
            id: v4(),
            title: 'Travel news',
            quantity: '10',
            link: '#',
        },
        {
            id: v4(),
            title: 'Modern technology',
            quantity: '3',
            link: '#',
        },
        {
            id: v4(),
            title: 'MProduct',
            quantity: '11',
            link: '#',
        },
        {
            id: v4(),
            title: 'Inspiration',
            quantity: '21',
            link: '#',
        },
        {
            id: v4(),
            title: 'Health Care',
            quantity: '9',
            link: '#',
        },
    ];

    const renderListCategorySidebar = () =>
        listCategorySidebar.map((item) => (
            <li key={item.id}>
                <a href={item.link}>
                    <p>{item.title}</p>
                    <p>({item.quantity.length === 1 ? `0${item.quantity}` : item.quantity})</p>
                </a>
            </li>
        ));

    return <ul className={cx('list-item-category')}>{renderListCategorySidebar()}</ul>;
};

export default SideBarCategory;
