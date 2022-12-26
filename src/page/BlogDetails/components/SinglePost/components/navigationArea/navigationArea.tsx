import classNames from 'classnames/bind';
import React from 'react';
import image from '../../../../../../static/image';
import NavItem from './components/navItem';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
const navigationArea = (props: Props) => {
    return (
        <div className={cx('wrapper-navigation-area')}>
            <NavItem
                type='prev'
                data={{
                    link: '#',
                    thumbSrc: image.blogDetails['60x60'].img_1,
                    title: 'Space The Final Frontier',
                }}
                className={cx('prev')}
            />
            <NavItem
                type='next'
                data={{
                    link: '#',
                    thumbSrc: image.blogDetails['60x60'].img_2,
                    title: 'Telescopes 101',
                }}
                className={cx('next')}
            />
        </div>
    );
};

export default navigationArea;
