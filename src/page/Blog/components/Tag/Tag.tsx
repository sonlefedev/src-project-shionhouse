import classNames from 'classnames/bind';
import React from 'react';
import { v4 } from 'uuid';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
const Tag = (props: Props) => {
    const listTag = [
        {
            id: v4(),
            link: '#',
            text: 'project',
        },
        {
            id: v4(),
            link: '#',
            text: 'love',
        },
        {
            id: v4(),
            link: '#',
            text: 'technology',
        },
        {
            id: v4(),
            link: '#',
            text: 'travel',
        },
        {
            id: v4(),
            link: '#',
            text: 'restaurant',
        },
        {
            id: v4(),
            link: '#',
            text: 'life style',
        },
        {
            id: v4(),
            link: '#',
            text: 'design',
        },
        {
            id: v4(),
            link: '#',
            text: 'illustration',
        },
    ];

    const renderTag = () => {
        return listTag.map((item) => (
            <li key={item.id}>
                <a href={item.link}>{item.text}</a>
            </li>
        ));
    };
    return <ul className={cx('wrapper-tag')}>{renderTag()}</ul>;
};

export default Tag;
