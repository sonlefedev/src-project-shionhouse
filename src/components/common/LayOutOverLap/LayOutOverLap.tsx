import classNames from 'classnames/bind';
import React from 'react';
import style from './style.module.scss';
type Props = {
    className?: string;
    display?: boolean;

    onClick?: () => any;
};
const cx = classNames.bind(style);

const LayOutOverLap = (props: Props) => {
    return (
        <div className={cx('layout-over-lap', props.className, props.display && 'display')}>
            <div onMouseDown={props.onClick}></div>
        </div>
    );
};

export default LayOutOverLap;
