import { PropsWithChildren, useRef } from 'react';
import style from './style.module.scss';

interface IItemSubMenu {
    JSX: JSX.Element;
    id: string;
}

interface ISubMenuProps {
    submenu: IItemSubMenu[];
}

const SubMenu = (props: PropsWithChildren<ISubMenuProps>) => {
    const { children, submenu } = props;
    const renderSubMenu = (submenu: IItemSubMenu[]) => {
        return (
            <ul>
                {submenu.map((item) => {
                    return <li key={item.id}>{item.JSX}</li>;
                })}
            </ul>
        );
    };
    return (
        <div className={style['item-menu']}>
            <p>{children}</p>
            {renderSubMenu(submenu)}
        </div>
    );
};

export default SubMenu;
