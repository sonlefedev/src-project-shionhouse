import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import ICssProperties from '../../../style/type/cssProperties';

const cx = classNames.bind(style);

interface IButtonProps {
    className?: string;
    br_color?: string;
    border_color?: string;
    text_color?: string;
    fs?: string;
    fw?: string;
    text_color_hover?: string;
    tx_transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
    p?: string;
    m?: string;

    to?: string;
    href?: string;
    hoverEffect?: 1 | 2;

    primary?: boolean;
}

const Button = (props: React.PropsWithChildren<IButtonProps>) => {
    const { children, to, href, hoverEffect, primary, className, ...style } = props;
    const { br_color, border_color, text_color, fs, fw, tx_transform, p, m, text_color_hover } = style;

    const styleSheet = useMemo(() => {
        return {
            'backgroundColor': br_color || (primary ? 'var(--primary-color)' : 'inherit'),
            'borderColor': border_color || (primary ? 'transparent' : 'inherit'),
            'color': text_color || (primary ? '#fff' : '#000'),
            'fontSize': fs || (primary ? '18px' : 'inherit'),
            'fontWeight': fw || (primary ? '500' : 'inherit'),
            'textTransform': tx_transform || (primary ? 'capitalize' : 'none'),
            'padding': p || (primary ? '10px 30px' : '0px'),
            'margin': m || (primary ? '0px' : '0px'),
            '--color-hover': text_color_hover || '#fff',
        } as ICssProperties;
    }, [br_color, border_color, text_color, fs, fw, tx_transform, p, m, primary, text_color_hover]);

    const renderBtnTag = useCallback(() => {
        const classNameButton = cx(
            'btn',
            'hover-none',
            '_button_',
            { 'hover-effect_2': hoverEffect === 2 },
            { 'hover-effect_1': hoverEffect === 1 },
            className && className,
        );
        if (to) {
            return (
                <Link style={styleSheet} className={classNameButton} to={to}>
                    {children}
                </Link>
            );
        }
        if (href) {
            return (
                <a style={styleSheet} className={classNameButton} href={href}>
                    {children}
                </a>
            );
        }
        return (
            <button style={styleSheet} className={classNameButton}>
                {children}
            </button>
        );
    }, [children, styleSheet, href, to, hoverEffect, className]);

    return <div className={cx('wrapper_btn')}>{renderBtnTag()}</div>;
};

export default Button;
