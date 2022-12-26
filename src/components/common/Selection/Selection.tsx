import style from './style.module.scss';
import { useCallback, useEffect, useState, useMemo } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import LayOutOverLap from '../LayOutOverLap';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
type Props = {
    options: IItemOption[];
    value: string;
    onChange: (value: string) => void;
};
interface IItemOption {
    value: string | 'default';
    label: string;
}
const Selection = (props: Props) => {
    const [isDisplayLayoutOverlap, setIsDisplayLayoutOverlap] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { options, onChange, value } = props;

    const handleClickChoose = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        console.log('re-render');
    }, []);

    const label = useMemo(() => {
        if (!options) return '';
        const option = options.find((option) => option.value === value);
        if (!option) return '';
        return option.label;
    }, [options, value]);

    useEffect(() => {
        if (isOpen) {
            setIsDisplayLayoutOverlap(true);
        } else {
            setIsDisplayLayoutOverlap(false);
        }
    }, [isOpen]);

    const renderOptionLiTag = useCallback(() => {
        return options.map((item) => (
            <li
                value={item.value}
                key={item.value}
                onClick={() => {
                    onChange(item.value);
                    setIsOpen(false);
                }}
            >
                {item.label}
            </li>
        ));
    }, [options, onChange]);

    return (
        <div className={style['wrapper']}>
            <div className={cx('beauty-selection', isOpen && 'open')}>
                <div className={style['current']} onClick={handleClickChoose}>
                    <span>{label}</span>
                    <MdKeyboardArrowDown className={style['icon']} />
                </div>

                <div className={cx('wrapper-list-option')}>
                    <ul className={cx('list-option')}>{renderOptionLiTag()}</ul>
                </div>
            </div>
            <LayOutOverLap display={isDisplayLayoutOverlap} onClick={() => setIsOpen(false)} />
        </div>
    );
};

export default Selection;
