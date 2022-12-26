import classNames from 'classnames/bind';
import { v4 } from 'uuid';
import PopularProduct from '../../components/Body/components/PopularProduct';
import LargeBtn from '../../components/common/Button/Type/Large';
import Input from '../../components/common/Input';
import NotificationPage from '../../components/common/NotificationPage';
import Service from '../../components/common/Service';
import LayoutTwoOne from '../../layout/components/LayoutTwoOne';
import DefaultLayout from '../../layout/DefaultLayout';
import image from '../../static/image';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);

const SmallTitle = (props: { text: string }) => {
    return <h2 className={cx('smallTitle')}>{props.text}</h2>;
};

const Paragraph = (props: { text: string }) => {
    return <p className={cx('paragraph')}>{props.text}</p>;
};

const ListThumb = (props: { data: { src: string; id: string }[] }) => {
    return (
        <ul className={cx('wrapper-list-thumb')}>
            {props.data.map((item) => (
                <li key={item.id}>
                    <img src={item.src} alt='' />
                </li>
            ))}
        </ul>
    );
};

const ProductDetailsPage = (props: Props) => {
    const renderCol2 = () => {
        return (
            <>
                <SmallTitle text='Description' />
                <Paragraph
                    text={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.`}
                />
                <SmallTitle text='Description' />
                <ListThumb
                    data={[
                        { id: v4(), src: image.arrival.image_1 },
                        { id: v4(), src: image.arrival.image_2 },
                        { id: v4(), src: image.arrival.image_3 },
                        { id: v4(), src: image.arrival.image_4 },
                    ]}
                />
            </>
        );
    };
    const renderCol1 = () => {
        return (
            <>
                <div className={cx('wrapper-map')}>
                    <img src={image.productDetails.map} alt='' />
                </div>
                <div className={cx('wrapper-form', 'pt-80px')}>
                    <SmallTitle text='Contact' />
                    <Input placeholder='Your Name' />
                    <Input placeholder='Email Address' />
                    <textarea name='' id='' cols={30} rows={10} placeholder='Comment'></textarea>
                    <LargeBtn type='2' text='Send Message' />
                </div>
            </>
        );
    };
    return (
        <DefaultLayout exclude={['Body', 'Slider', 'Navigation']} childrenPosition={1}>
            <NotificationPage
                listNotificationPage={[
                    {
                        id: v4(),
                        link: '/',
                        text: 'Home',
                    },
                    {
                        id: v4(),
                        link: '/shop',
                        text: 'Shop',
                    },
                    {
                        id: v4(),
                        link: '/product-details',
                        text: 'Product Details',
                    },
                ]}
                className={cx('mt-header')}
            />
            <div className={cx('wrapper-product-details-page')}>
                <LayoutTwoOne col_2={renderCol2()} col_1={renderCol1()} />
                <PopularProduct className={cx('')} />
                <Service />
            </div>
        </DefaultLayout>
    );
};

export default ProductDetailsPage;
