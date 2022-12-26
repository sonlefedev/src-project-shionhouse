import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {};

const Quote = (props: Props) => {
    return (
        <div className={cx('wrapper-quote')}>
            <div className={cx('container')}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis, nobis veritatis eum est et
                    inventore quae vero mollitia hic porro, pariatur voluptate blanditiis veniam ea incidunt tenetur
                    assumenda distinctio!
                </p>
            </div>
        </div>
    );
};

export default Quote;
