import classNames from 'classnames/bind';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Link } from 'react-router-dom';
import listMenu, { IItemMenu } from './listMenu';
import style from './style.module.scss';
const cx = classNames.bind(style);
interface IMenuProps {}

const Menu = (props: IMenuProps) => {
    const renderMenu = (listMenu: IItemMenu[], type?: string) => {
        return (
            <ul className={cx('list-menu', { sub_1: type === 'sub_1' })}>
                {type === 'sub_1' && (
                    <div className={cx('menu-arrow')}>
                        <div className={cx('icon')}>
                            <IoMdArrowDropup />
                        </div>
                    </div>
                )}
                {listMenu.map((menu) => (
                    <li className={style['item-menu']} key={menu.text}>
                        {(menu.children && (
                            <div className={style['item-content']}>
                                <p>{menu.text}</p>
                                <div className={cx('icon-more', 'flex_center')}>
                                    <IoMdArrowDropdown />
                                </div>
                            </div>
                        )) || <Link to={menu.path}>{menu.text}</Link>}
                        {menu.children && renderMenu(menu.children, 'sub_1')}
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div className={style['wp-menu']}>
            <nav>{renderMenu(listMenu)}</nav>
        </div>
    );
};

export default Menu;
