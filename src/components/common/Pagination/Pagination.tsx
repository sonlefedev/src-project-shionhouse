import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
const Pagination = (props: Props) => {
    const [pageActive, setPageActive] = useState<number>(1);
    const [numberPages, setNumberPages] = useState<number[]>([1, 2, 3, 4]);

    const renderPageNumber = useCallback(() => {
        return numberPages.map((item) => (
            <li key={item} onClick={() => setPageActive(item)} className={cx(pageActive === item && 'active')}>
                {item}
            </li>
        ));
    }, [pageActive, numberPages]);

    const handleClickIcon = (type: 'next' | 'prev') => {
        switch (type) {
            case 'next': {
                setNumberPages((prev) => {
                    const max = Math.max(...prev);
                    const newNumberPages = [];
                    for (let i = 1; i < 5; i++) {
                        newNumberPages.push(i + max);
                    }
                    setPageActive(newNumberPages[0]);
                    return newNumberPages;
                });
                break;
            }

            case 'prev': {
                setNumberPages((prev) => {
                    const min = Math.min(...prev);
                    if (min === 1) return prev;
                    let newNumberPages = [];
                    for (let i = 1; i < 5; i++) {
                        newNumberPages.push(min - i);
                    }
                    newNumberPages = newNumberPages.sort((a, b) => a - b);
                    setPageActive(newNumberPages[newNumberPages.length - 1]);
                    return newNumberPages;
                });
                break;
            }
        }
    };

    return (
        <div className={cx('wrapper-pagination')}>
            <ul className={cx('pagination')}>
                <li className={cx('prev')} onClick={() => handleClickIcon('prev')}>
                    <MdKeyboardArrowLeft className={cx('icon')} />
                </li>
                {renderPageNumber()}
                <li className={cx('next')} onClick={() => handleClickIcon('next')}>
                    <MdKeyboardArrowRight className={cx('icon')} />
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
