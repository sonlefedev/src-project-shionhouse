import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import image from '../../static/image';
import SliderProvider from './SliderProvider';
import style from './style.module.scss';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import Button from '../common/Button';
import ICssProperties from '../../style/type/cssProperties';

const cx = classNames.bind(style);
interface ISliderProps {
    listImageSlider?: IListBrSlider[];
    stylingTitle?: ICssProperties;
    text_btn?: string;
    classNameH1?: string;
    hiddenControl?: boolean;
    noChangeBackgroundImage?: boolean;
}

interface IListBrSlider {
    src: string;
    title: string;
    link?: string;
}

const Slider = (props: ISliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { listImageSlider, stylingTitle, text_btn, hiddenControl, noChangeBackgroundImage } = props;

    const [indexImgSlider, setIndexImgSlider] = useState<number>(0);

    const listBrSlider: IListBrSlider[] = useMemo<{ src: string; title: string }[]>(() => {
        if (listImageSlider) return listImageSlider;
        return [
            { src: image.slider.image_1, title: 'slider content 1', link: '#' },
            { src: image.slider.image_2, title: 'slider content 2', link: '#' },
            { src: image.slider.image_3, title: 'slider content 3', link: '#' },
            { src: image.blog.itemBlog.img_1, title: 'slider content 4', link: '#' },
            { src: image.blog.itemBlog.img_2, title: 'slider content 5', link: '#' },
            { src: image.blog.itemBlog.img_3, title: 'slider content 6', link: '#' },
        ];
    }, [listImageSlider]);

    useEffect(() => {
        if (noChangeBackgroundImage) return;

        const _idInterval = setInterval(() => {
            setIndexImgSlider((prev) => {
                if (prev >= listBrSlider.length - 1) return 0;
                return prev + 1;
            });
        }, 17000);

        return () => {
            clearInterval(_idInterval);
        };
    }, [noChangeBackgroundImage, listBrSlider.length]);

    const handleClickBtn = useCallback((type: 'prev' | 'next', lengthArrayImgSlider: number) => {
        setIndexImgSlider((prev) => {
            if (type === 'prev') {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    return lengthArrayImgSlider - 1;
                }
            } else if (type === 'next') {
                if (prev < lengthArrayImgSlider - 1) {
                    return prev + 1;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        });
    }, []);

    const renderControlSliderLi = useCallback(() => {
        return listBrSlider.map((slider, i) => (
            <li
                onClick={() => setIndexImgSlider(i)}
                className={cx({ active: indexImgSlider === i })}
                data-value={i}
                key={slider.src}
            >
                <span></span>
            </li>
        ));
    }, [listBrSlider, indexImgSlider]);

    useEffect(() => {
        const url = window.location.href;

        if (!sliderRef.current) return;
        sliderRef.current.setAttribute(
            'style',
            `background-image: url(${url.substring(0, url.length - 1) + listBrSlider[indexImgSlider].src})`,
        );
    }, [indexImgSlider, listBrSlider]);

    return (
        <SliderProvider>
            <div className={cx('slider-br')}>
                <div ref={sliderRef} className={cx('slider-wrapper', 'flex_center')}>
                    <div className={cx('layer-overlaps')}>
                        {hiddenControl || (
                            <div className={cx('left')}>
                                <div className={cx('icon')} onClick={() => handleClickBtn('prev', listBrSlider.length)}>
                                    <FaChevronCircleLeft />
                                </div>
                            </div>
                        )}
                        <div className={cx('hero_caption')}>
                            <h1 style={stylingTitle} className={cx(props.classNameH1)}>
                                {listBrSlider[indexImgSlider].title || ''}
                            </h1>
                            <div className={cx('wrapper_button')}>
                                <Button primary={true} hoverEffect={1} to={listBrSlider[indexImgSlider].link || '#'}>
                                    {text_btn || 'show more'}
                                </Button>
                            </div>
                            {hiddenControl || (
                                <div className={cx('control-slider')}>
                                    <ul>{renderControlSliderLi()}</ul>
                                </div>
                            )}
                        </div>
                        {hiddenControl || (
                            <div className={cx('right')}>
                                <div className={cx('icon')} onClick={() => handleClickBtn('next', listBrSlider.length)}>
                                    <FaChevronCircleRight />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SliderProvider>
    );
};

export default Slider;
