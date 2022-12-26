import classNames from 'classnames/bind';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const cx = classNames.bind(style);
interface IListNotificationPage {
    id: string;
    text: string;
    link: string;
}

type Props = {
    listNotificationPage: IListNotificationPage[];
    className?: string;
};

const NotificationPage = (props: Props) => {
    const { listNotificationPage } = props;
    const renderListNotificationPage = useCallback(() => {
        return listNotificationPage.map((item) => (
            <li key={item.id}>
                <Link to={item.link}>{item.text}</Link>
            </li>
        ));
    }, [listNotificationPage]);
    return (
        <div className={cx('notification-page', props.className)}>
            <ul>{renderListNotificationPage()}</ul>
        </div>
    );
};

export default NotificationPage;
