import classNames from 'classnames/bind';
import style from './style.module.scss';
type Props = {
    text: string;
    className?: string;
    onClick?: () => void;
    type?: '2';
};

const cx = classNames.bind(style);
const LargeBtn = (props: Props) => {
    return (
        <button
            onClick={props.onClick ? props.onClick : () => {}}
            className={cx('reset-btn', 'button-large', props.type === '2' ? 'type_2' : '', props.className)}
        >
            {props.text}
        </button>
    );
};

export default LargeBtn;
