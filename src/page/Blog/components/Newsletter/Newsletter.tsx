import classNames from 'classnames/bind';
import React from 'react';
import Input from '../../../../components/common/Input';

import style from './style.module.scss';

const cx = classNames.bind(style);
type Props = {};

const Newsletter = (props: Props) => {
    return (
        <div className={cx('wrapper-Newsletter')}>
            <Input placeholder='Enter email' contentButtonLargeBottom='subscribe' />
        </div>
    );
};

export default Newsletter;
