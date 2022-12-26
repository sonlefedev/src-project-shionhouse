import classNames from 'classnames/bind';
import { PropsWithChildren } from 'react';
import ICssProperties from '../../../../style/type/cssProperties';
import style from './style.module.scss';
import useLayerOverlapsStore from '../useLayerOverlapsStore';

const cx = classNames.bind(style);
interface ILayerOverlapsAreaProps {
    background_color?: string;
    visible?: boolean;
}

const LayerOverlapsArea = (props: PropsWithChildren<ILayerOverlapsAreaProps>) => {
    const { children, background_color } = props;
    const { visibleOverLaps } = useLayerOverlapsStore();

    return (
        <div
            style={{ '--background_color': background_color ? background_color : undefined } as ICssProperties}
            className={cx('wp-layer-overlaps', { display: visibleOverLaps })}
        >
            {children}
        </div>
    );
};

export default LayerOverlapsArea;
