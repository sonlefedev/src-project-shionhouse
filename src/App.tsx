import { Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import classNames from 'classnames/bind';
import style from './App.module.scss';
import GotoTop from './components/common/GotoTop';
const cx = classNames.bind(style);

function App() {
    const renderRoutes = () => {
        return routes.map((item) => <Route key={item.path} path={item.path} element={item.element} />);
    };
    return (
        <div className={cx('App')}>
            <Routes>{renderRoutes()}</Routes>
            <GotoTop />
        </div>
    );
}

export default App;
