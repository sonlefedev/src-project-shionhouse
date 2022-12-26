import classNames from 'classnames/bind';
import React from 'react';
import style from './style.module.scss';
import listSocial, { ISocialMenu } from './listSocial';
import ICssProperties from '../../../style/type/cssProperties';

type Props = {
    iconColor?: string;
    iconColorHover?: string;
    backgroundHover?: string;
    className?: string;
};
const cx = classNames.bind(style);
const Social = (props: Props) => {
    const renderSocial = (listSocial: ISocialMenu[]) => {
        return listSocial.map((item) => (
            <a
                style={
                    {
                        '--color-primary-social': props.iconColor,
                        '--color-border-social': props.iconColor,
                        '--color-icon-social-hover': props.iconColorHover,
                        '--background-hover': props.backgroundHover,
                    } as ICssProperties
                }
                className={cx('link-social', 'flex_center')}
                key={item.path}
                href={item.path}
            >
                <div className={cx('icon', 'flex_center')}>{item.icon}</div>
            </a>
        ));
    };
    return <div className={cx('social', 'flex_center', props.className)}>{renderSocial(listSocial)}</div>;
};

export default Social;
