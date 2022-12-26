import classNames from 'classnames/bind';
import { useState, useCallback } from 'react';
import Selection from '../Selection';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);

const listOption = {
    category: [
        { value: 'default', label: 'Category' },
        { value: '1', label: 'Shat' },
        { value: '2', label: 'T-Shat' },
        { value: '3', label: 'Pent' },
        { value: '4', label: 'Dress' },
    ],
    type: [
        { value: 'default', label: 'Type' },
        { value: '1', label: 'SM' },
        { value: '2', label: 'LG' },
        { value: '3', label: 'XL' },
        { value: '4', label: 'XXL' },
    ],
    color: [
        { value: 'default', label: 'Color' },
        { value: '1', label: 'White' },
        { value: '2', label: 'Gray' },
        { value: '3', label: 'Blue' },
        { value: '4', label: 'Green' },
        { value: '5', label: 'Red' },
    ],
    size: [
        { value: 'default', label: 'Size' },
        { value: '1', label: '1.2ft' },
        { value: '2', label: '2.5ft' },
        { value: '3', label: '5.2ft' },
        { value: '4', label: '3.2ft' },
    ],
    priceRange: [
        { value: 'default', label: 'Price range' },
        { value: '1', label: '$70 to 100$' },
        { value: '2', label: '$100 to $190' },
        { value: '3', label: '$190 to $260' },
        { value: '4', label: '$280 to $600' },
    ],
};

const Category = (props: Props) => {
    const [chooseCategory, setChooseCategory] = useState('default');
    const [chooseType, setChooseType] = useState('default');
    const [chooseSize, setChooseSize] = useState('default');
    const [chooseColor, setChooseColor] = useState('default');
    const [choosePriceRange, setChoosePriceRange] = useState('default');

    const handleClearChoose = () => {
        setChooseCategory('default');
        setChooseType('default');
        setChooseSize('default');
        setChooseColor('default');
        setChoosePriceRange('default');
    };

    const renderListSelection = useCallback(() => {
        const TDA = Object.entries(listOption);
        return TDA.map((item) => {
            let value;
            let onChange;

            switch (item[0]) {
                case 'category': {
                    value = chooseCategory;
                    onChange = setChooseCategory;
                    break;
                }
                case 'type': {
                    value = chooseType;
                    onChange = setChooseType;
                    break;
                }
                case 'color': {
                    value = chooseColor;
                    onChange = setChooseColor;
                    break;
                }
                case 'size': {
                    value = chooseSize;
                    onChange = setChooseSize;
                    break;
                }
                case 'priceRange': {
                    value = choosePriceRange;
                    onChange = setChoosePriceRange;
                    break;
                }
                default: {
                    value = '';
                    onChange = () => {};
                }
            }

            return <Selection key={item[0]} options={item[1]} value={value} onChange={onChange} />;
        });
    }, [chooseCategory, chooseType, chooseSize, chooseColor, choosePriceRange]);

    return (
        <div className={style['wrapper-category']}>
            {renderListSelection()}
            <button className={cx('reset-btn', 'clear-btn')} onClick={handleClearChoose}>
                clear
            </button>
        </div>
    );
};

export default Category;
