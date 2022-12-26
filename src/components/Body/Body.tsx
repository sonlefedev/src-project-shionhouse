import BodyProvider from './BodyProvider';
import Arrival from './components/Arrival';
import Collection from './components/Collection';
import Popular from '../common/Popular';
import PopularProduct from './components/PopularProduct';
import Service from '../common/Service';
import style from './style.module.scss';
interface IBodyProps {}

const Body = (props: IBodyProps) => {
    return (
        <BodyProvider>
            <div className={style['body-wrapper']}>
                <Popular />
                <Arrival />
                <Collection />
                <PopularProduct />
                <Service />
            </div>
        </BodyProvider>
    );
};

export default Body;
