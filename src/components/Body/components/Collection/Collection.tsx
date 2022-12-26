import classNames from 'classnames/bind';
import image from '../../../../static/image';
import Slider from '../../../Slider';
import style from './style.module.scss';

interface ICollectionProps {}

const cx = classNames.bind(style);

const Collection = (props: ICollectionProps) => {
    return (
        <div className={cx('collection-wrapper')}>
            <Slider
                stylingTitle={{
                    color: '#fff',
                    fontSize: '70px',
                    marginBottom: '21px',
                    lineHeight: '1.2',
                    marginTop: '0',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontFamily: '"Cinzel",serif',
                }}
                classNameH1={cx('hero-h1')}
                text_btn={'about us'}
                hiddenControl={true}
                noChangeBackgroundImage={true}
                listImageSlider={[
                    { title: 'collection houses our first-ever', src: image.collection.image_1, link: '/about' },
                ]}
            />
        </div>
    );
};

export default Collection;
