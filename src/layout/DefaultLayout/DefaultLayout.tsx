import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { DefaultLayoutType } from './type';
import styles from './styles.module.scss';
import listLayout, { LayoutObject } from './listLayout';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface IDefaultLayoutProps {
    exclude?: DefaultLayoutType.exclude[];
    listComponentLayouts?: LayoutObject[];
    childrenPosition?: number;
}

const DefaultLayout = (props: PropsWithChildren<IDefaultLayoutProps>) => {
    const { exclude, listComponentLayouts, children, childrenPosition } = props;
    const [isFix, setIsFix] = useState<boolean>(false);

    useEffect(() => {
        const handleEventScroll = () => {
            const winScroll = Math.floor(document.body.scrollTop || document.documentElement.scrollTop);

            if (winScroll > 1) {
                setIsFix(true);
            } else if (winScroll === 0) {
                setIsFix(false);
            }
        };
        window.addEventListener('scroll', handleEventScroll);

        return () => {
            window.removeEventListener('scroll', handleEventScroll);
        };
    }, []);

    const renderLayout = useCallback(() => {
        let ul = listLayout();
        if (listComponentLayouts) {
            ul = listComponentLayouts;
        }
        if (exclude) {
            ul = ul.filter((item) => !exclude.includes(item.id));
        }
        if (children && childrenPosition) {
            ul.splice(childrenPosition, 0, { id: 'Children', isChild: true, componentChild: children });
        }

        return ul.map((item) => {
            if (item.isChild)
                return (
                    <div className={cx('layout-item', item.id)} key={item.id}>
                        {item.componentChild}
                    </div>
                );
            return (
                <div className={cx('layout-item', item.id, item.id === 'Header' && isFix && 'onScroll')} key={item.id}>
                    {item.component?.current}
                </div>
            );
        });
    }, [listComponentLayouts, exclude, isFix, children, childrenPosition]);

    return <div className={cx('default-layout')}>{renderLayout()}</div>;
};

export default DefaultLayout;
