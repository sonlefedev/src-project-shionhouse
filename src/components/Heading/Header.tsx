import { useCallback, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import classNames from 'classnames/bind';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu';
import HeaderProvider from './HeaderProvider';
import { BsSearch, BsCart } from 'react-icons/bs';
import style from './style.module.scss';
import Social from '../common/Social/Social';
import Input from '../common/Input';
import listMenu, { IItemMenu } from './components/Menu/listMenu';
import LayOutOverLap from '../common/LayOutOverLap';

const cx = classNames.bind(style);
interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
    const [isSearchDisplay, setIsSearchDisplay] = useState<boolean>(false);
    const [keywordsSearch, setKeywordsSearch] = useState<string>('');
    // mobile
    const [displayCategoryMobile, setDisplayCategoryMobile] = useState<boolean>(false);
    const renderNavMobile = useCallback((listMenu: IItemMenu[], type?: 'sub') => {
        return (
            <>
                <ul className={cx(type === 'sub' ? 'sub' : '')}>
                    {listMenu.map((i) => (
                        <li key={i.path}>
                            {(i.children && (
                                <span
                                    onClick={(e) => {
                                        const tag = e.target as any;
                                        tag.parentNode.classList.toggle(cx('show-sub'));
                                    }}
                                >
                                    {i.text}{' '}
                                    <AiFillCaretRight
                                        onClick={(e) => {
                                            const tag = e.target as any;
                                            tag.parentNode.classList.toggle(cx('show-sub'));
                                        }}
                                        className={cx('icon-more-mobile')}
                                    />{' '}
                                </span>
                            )) || <a href={i.path}>{i.text}</a>}
                            {i.children && renderNavMobile(i.children, 'sub')}
                        </li>
                    ))}
                </ul>
            </>
        );
    }, []);
    return (
        <HeaderProvider>
            <div className={cx('wp-header', 'pc')}>
                <div className={style['header-left']}>
                    <Logo />
                    <Menu />
                </div>
                <div className={style['header-right']}>
                    <div className={style['wrapper-social-search']}>
                        <div className={cx('ll', isSearchDisplay && 'isSearchDisplay')}>
                            <Social className={cx('social')} />
                            <Input
                                value={keywordsSearch}
                                onChange={(v) => setKeywordsSearch(v)}
                                className={cx('input-search')}
                                placeholder='Search Keyword'
                                button={true}
                                onClickBtnRightInput={() => {
                                    alert('Search: ' + keywordsSearch);
                                }}
                            />
                        </div>
                    </div>
                    <div className={style['header-search']}>
                        <ul className={cx('flex_center')}>
                            <li
                                className={cx('flex_center', 'search')}
                                onClick={() => setIsSearchDisplay((prev) => !prev)}
                            >
                                <div className={cx('icon')}>
                                    <BsSearch />
                                </div>
                            </li>
                            <li className={cx('flex_center', 'cart')}>
                                <div className={cx('icon')}>
                                    <BsCart />
                                </div>
                                <span className={cx('quantity')}>99</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('header-mobile')}>
                <Logo />
                <div className={cx('btn-navBar')} onClick={() => setDisplayCategoryMobile((prev) => !prev)}>
                    <div className={cx('icon', displayCategoryMobile && 'open')}>
                        <span></span>
                    </div>
                </div>
                <div className={cx('category', displayCategoryMobile && 'open')}>
                    <Input
                        value={keywordsSearch}
                        onChange={(v) => setKeywordsSearch(v)}
                        className={cx('input-search')}
                        placeholder='Search Keyword'
                        button={true}
                        onClickBtnRightInput={() => {
                            alert('Search: ' + keywordsSearch);
                        }}
                    />
                    <ul>
                        {renderNavMobile(listMenu)}
                        <Social />
                    </ul>
                </div>
                <LayOutOverLap display={displayCategoryMobile} onClick={() => setDisplayCategoryMobile(false)} />
            </div>
        </HeaderProvider>
    );
};

export default Header;
