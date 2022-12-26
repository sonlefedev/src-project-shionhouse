import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
type Props = {};
const cx = classNames.bind(style);
interface IConfigMap {
    center: {
        lat: number;
        lng: number;
    };
    zoom: number;
}

const Point = (props: { text: string; lat: number; lng: number }) => <div className={cx('point')}>{props.text}</div>;

const Map = (props: Props) => {
    const [configMap, setConfigMap] = useState<IConfigMap>({
        center: {
            lat: 10.8167,
            lng: 106.6333,
        },
        zoom: 11,
    });
    return (
        <div className={cx('wrapper-map', 'max-w-1200px')}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={configMap.center}
                defaultZoom={configMap.zoom}
            >
                <Point lat={10.967041} lng={106.71693} text='B' />
                <Point lat={configMap.center.lat} lng={configMap.center.lng} text='A' />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
