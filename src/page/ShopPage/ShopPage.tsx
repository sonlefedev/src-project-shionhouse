import classNames from 'classnames/bind';
import { v4 } from 'uuid';
import Popular from '../../components/common/Popular';
import NotificationPage from '../../components/common/NotificationPage';
import DefaultLayout from '../../layout/DefaultLayout';
import style from './style.module.scss';
import Service from '../../components/common/Service';
import Arrival from '../../components/Body/components/Arrival';
import Category from '../../components/common/Category';

type Props = {};
const cx = classNames.bind(style);
const ShopPage = (props: Props) => {
    return (
        <DefaultLayout exclude={['Body', 'Slider', 'Navigation']} childrenPosition={1}>
            <div className={cx('container-body-shop_page')}>
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
                    ]}
                    className={cx('mt-header')}
                />
                <div className={cx('category-area')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('wrapper-heading')}>
                                <h2>Shop with us</h2>
                                <p>Browse from 230 latest items</p>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('category')}>
                                <Category />
                            </div>
                            <Arrival
                                styleWrapper={{
                                    width: '75%',
                                    flex: '75%',
                                    padding: '0',
                                }}
                                styleItem={{
                                    maxWidth: 'calc(100% / 3)',
                                    width: 'calc(100% / 3)',
                                }}
                                hiddenTitle={true}
                            />
                        </div>
                    </div>
                </div>
                <Popular />
                <Service />
            </div>
        </DefaultLayout>
    );
};

export default ShopPage;
