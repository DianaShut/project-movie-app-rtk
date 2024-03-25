import css from './Header.module.css'
import logo from './images/logo.png'
import homepage from './images/homepage.png'
import favorites from './images/favorites.png'
const Header = () => {
    return (
        <div className={css.Header}>
            <img className={css.logo} src={logo} alt="logo"/>
            <img className={css.homeIcon} src={homepage} alt="homepage"/>
            <img src={favorites} alt="favorites"/>
            <div className={css.themeSwitch}>
                <b>CHANGE THEME</b>
            </div>
        </div>
    );
};

export {Header};