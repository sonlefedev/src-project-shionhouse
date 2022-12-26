import classNames from 'classnames/bind';
import style from './style.module.scss';
type Props = {
    col_2: JSX.Element | JSX.Element[];
    col_1: JSX.Element | JSX.Element[];
};
const cx = classNames.bind(style);
const LayoutTwoOne = (props: Props) => {
    return (
        <div className={cx('wrapper-layout-2-1')}>
            <div className={cx('col_2')}>{props.col_2}</div>
            <div className={cx('col_1')}>{props.col_1}</div>
        </div>
    );
};

export default LayoutTwoOne;
