import classNames from 'classnames/bind';
import Input from '../../../../components/common/Input';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
const SearchArea = (props: Props) => {
    return (
        <div className={cx('wrapper-search-area')}>
            <Input contentButtonLargeBottom='search' button={true} />
        </div>
    );
};

export default SearchArea;
