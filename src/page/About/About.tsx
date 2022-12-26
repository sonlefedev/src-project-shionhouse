import { useCallback, useMemo } from 'react';
import classNames from 'classnames/bind';
import { v4 } from 'uuid';
import NotificationPage from '../../components/common/NotificationPage';
import Popular from '../../components/common/Popular';
import DefaultLayout from '../../layout/DefaultLayout';
import image from '../../static/image';
import Section from './components/Section';
import { IDataSection } from './components/Section/Section';
import style from './style.module.scss';

const cx = classNames.bind(style);
type Props = {};

const About = (props: Props) => {
    const listDataSection = useMemo(() => {
        return [
            {
                paragraph:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                srcImg: image.about.img_1,
                title: 'Our Story',
            },
            {
                paragraph:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                srcImg: image.about.img_2,
                title: 'Journey start from',
            },
            {
                title: '2020',
                paragraph:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
        ] as IDataSection[];
    }, []);

    const renderSectionAbout = useCallback(() => {
        return listDataSection.map((item) => <Section key={item.title} data={item} />);
    }, [listDataSection]);
    return (
        <DefaultLayout exclude={['Body', 'Slider', 'Navigation']} childrenPosition={1}>
            <div className={cx('container-body-about_page')}>
                <NotificationPage
                    listNotificationPage={[
                        {
                            id: v4(),
                            link: '#',
                            text: 'Home',
                        },
                        {
                            id: v4(),
                            link: '/about',
                            text: 'About',
                        },
                    ]}
                />
                <div className={cx('container')}>{renderSectionAbout()}</div>
                <Popular />
            </div>
        </DefaultLayout>
    );
};

export default About;
