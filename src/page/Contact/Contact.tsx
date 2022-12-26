import classNames from 'classnames/bind';
import { v4 } from 'uuid';
import { AiFillHome, AiOutlineMail } from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';

import CommentForm from '../../components/common/CommentForm';
import NotificationPage from '../../components/common/NotificationPage';
import LayoutTwoOne from '../../layout/components/LayoutTwoOne';
import DefaultLayout from '../../layout/DefaultLayout';
import style from './style.module.scss';
import Map from './Map';
type Props = {};
const cx = classNames.bind(style);
const Contact = (props: Props) => {
    const renderCol_2 = () => {
        return (
            <CommentForm
                nameField={['message', 'name', 'email', 'subject']}
                plhdInput3='Enter Subject'
                plhdTextArea='Enter Message'
                noTitle={true}
                noBorderTop={true}
                mt='0'
                pt='0'
            />
        );
    };
    const renderCol_1 = () => {
        const listMediaContactInfo = [
            { id: v4(), icon: <AiFillHome />, h4: 'Buttonwood, California.', p: 'Rosemead, CA 91770' },
            { id: v4(), icon: <HiPhone />, h4: '+1 253 565 2365', p: 'Mon to Fri 9am to 6pm' },
            { id: v4(), icon: <AiOutlineMail />, h4: 'support@colorlib.com', p: 'Send us your query anytime!' },
        ];
        return (
            <ul className={cx('list-media-contact-info')}>
                {listMediaContactInfo.map((item) => (
                    <li key={item.id}>
                        <div className={cx('icon')}>{item.icon}</div>
                        <div className={cx('info')}>
                            <h4>{item.h4}</h4>
                            <p>{item.p}</p>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <DefaultLayout exclude={['Body', 'Slider', 'Navigation']} childrenPosition={1}>
            <NotificationPage
                className={cx('mt-header')}
                listNotificationPage={[
                    { id: v4(), link: '/', text: 'Home' },
                    { id: v4(), link: '/contact', text: 'Contact' },
                ]}
            />
            <div className={cx('wrapper-contact')}>
                <div className={cx('map')}>
                    <Map />
                </div>
                <h2 className={cx('max-w-1200px')}>Get in Touch</h2>
                <LayoutTwoOne col_1={renderCol_1()} col_2={renderCol_2()} />
            </div>
        </DefaultLayout>
    );
};

export default Contact;
