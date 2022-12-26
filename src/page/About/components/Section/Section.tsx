import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

export interface IDataSection {
    title?: string;
    paragraph?: string;
    srcImg?: string;
}
type Props = {
    data?: IDataSection;
};

const Section = (props: Props) => {
    const { data } = props;

    if (!data) return null;

    return (
        <div className={cx('wrapper-section')}>
            <div className={cx('info')}>
                <h2>{data.title}</h2>
                <p>{data.paragraph}</p>
            </div>

            {data.srcImg && (
                <div className={cx('img')}>
                    <img src={data.srcImg} alt='' />
                </div>
            )}
        </div>
    );
};

export default Section;
