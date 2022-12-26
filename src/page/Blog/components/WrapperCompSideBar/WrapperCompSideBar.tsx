import classNames from 'classnames/bind';
import React from 'react';
import style from './style.module.scss';

type Props = {
    title?: string;
};
const cx = classNames.bind(style);
const WrapperCompSideBar = (props: React.PropsWithChildren<Props>) => {
    return (
        <div className={cx('WrapperCompSideBar')}>
            {props.title && <h4>{props.title}</h4>}
            {props.children}
        </div>
    );
};

export default WrapperCompSideBar;
