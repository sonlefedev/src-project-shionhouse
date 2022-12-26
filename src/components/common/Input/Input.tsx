import classNames from 'classnames/bind';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import LargeBtn from '../Button/Type/Large';
import style from './style.module.scss';
type Props = {
    button?: boolean;
    className?: string;
    placeholder?: string;
    contentButtonLargeBottom?: string;
    value?: string;
    onChange?: (v: string) => void;
    onClickBtnRightInput?: () => void;
};
const cx = classNames.bind(style);
const Input = (props: Props) => {
    const { button, placeholder, contentButtonLargeBottom, value, onChange, className, onClickBtnRightInput } = props;
    if (value) {
        if (!onChange) {
            console.warn(`Mầy truyền value mà không truyền onChang !!`);
        }
    }
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onChange) return;
        return onChange(e.target.value);
    };
    return (
        <div className={cx('wrapper-all', className)}>
            <div className={cx('wrapper-input')}>
                <input
                    onChange={onChangeInput}
                    value={value}
                    type='text'
                    placeholder={placeholder ? placeholder : 'Search Keyword'}
                />

                {button && (
                    <button onClick={onClickBtnRightInput}>
                        <BsSearch />
                    </button>
                )}
            </div>

            {contentButtonLargeBottom && <LargeBtn text={contentButtonLargeBottom} />}
        </div>
    );
};

export default Input;
