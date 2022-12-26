import { Link } from 'react-router-dom';
import image from '../../../../static/image';
import style from './styles.module.scss';

interface ILogoProps {}

const Logo = (props: ILogoProps) => {
    return (
        <Link to={'/'} className={style['link']}>
            <div className={style['logo-wrapper']}>
                <img src={image.logo} alt='logo' />
            </div>
        </Link>
    );
};

export default Logo;
