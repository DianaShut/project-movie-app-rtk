import css from './Header.module.css'
import logo from './images/logo.png'
import favorites from './images/favorites.png'
import {ThemeSwitch} from "./ThemeSwitch";
import {useAppSelector} from "../../hooks";

import {useEffect} from "react";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {


    const {theme} = useAppSelector(state => state.theme)

    useEffect(() => {
        if (theme === 'light') document.body.classList.add('light')
        else document.body.classList.remove('light')
    }, [theme]);

    return (
        <div>
        <div className={theme === 'light' ? css.light : css.dark}>
            <img className={css.logo} src={logo} alt="logo"/>
            <div className={css.icons}>
                <Link to={'movies'}>
                    <HomeIcon className={css.homeIcon} sx={{ fontSize: 57 }}/>
                </Link>
                <Link to={'favorites'}>
                    <div className={css.heart}><img src={favorites} alt="favorites"/></div>
                </Link>
                <div className={css.themeSwitch}>
                    <ThemeSwitch/>
                </div>
            </div>
        </div>
            <div className={css.hr}></div>

        </div>
    );
};

export {Header};