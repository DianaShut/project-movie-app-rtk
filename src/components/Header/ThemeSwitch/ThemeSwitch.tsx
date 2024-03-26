import {useAppDispatch, useAppSelector} from "../../../hooks";
import {themeActions} from "../../../store";
import css from './ThemeSwitch.module.css'
import {useEffect} from "react";

const ThemeSwitch = () => {
    const {theme} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    const handleThemeSwitch = () => {
        dispatch(themeActions.switchTheme())
    }

    useEffect(() => {
        if (theme === 'light') document.body.classList.add('light')
        else document.body.classList.remove('light')
    }, [theme]);

    return (
        <div className={theme === 'light' ? css.light : css.dark}>
            <button onClick={handleThemeSwitch}>
                Switch to {theme === 'dark' ? 'light' : 'dark'} theme
            </button>
        </div>
    );
};

export {ThemeSwitch};