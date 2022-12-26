import classNames from 'classnames/bind';
import ItemComment from './components/ItemComment';
import { IDataItemComment } from './components/ItemComment/ItemComment';
import style from './style.module.scss';
type Props = {
    data: IDataItemComment[];
};

const cx = classNames.bind(style);
const CommentArea = (props: Props) => {
    const { data } = props;
    if (!data) return <p>There isn't anything</p>;

    const renderItemComment = () => data.map((item) => <ItemComment key={item.id} data={item} />);
    return (
        <div className={cx('wrapper-comment-area')}>
            <h4 className={cx('quantity')}>
                {String(data.length).length === 1 ? `0${data.length} Comments` : `${data.length} Comments`}
            </h4>
            {renderItemComment()}
        </div>
    );
};

export default CommentArea;
