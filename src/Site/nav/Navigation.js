import "./nav.css";
import facebookLogo_dark from './Facebook_Logo_Secondary.png';
import facebookLogo_light from './Facebook_Logo_Primary.png';
import githubLogo_dark from './github-mark-white.png'
import githubLogo_light from './github-mark.png'
import instagramLogo_dark from './Instagram_Glyph_White.png'
import instagramLogo_light from './Instagram_Glyph_Black.png'
import {  useContext, useEffect } from "react";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeContext } from "../theme/ThemeContext";
const Navigation = () => {
    const {darkTheme, toggleTheme} = useContext(ThemeContext);

    useEffect(() => {
        var navDiv = document.getElementById("sectorNavigation");
        var navBottom = navDiv.offsetTop + navDiv.offsetHeight;
        var prevScroll = window.scrollY;
        window.onscroll = () => {
            var currentScroll = window.scrollY;
            if (prevScroll > currentScroll || currentScroll < navBottom){
                navDiv.style.top = "0"
            }
            else{
                navDiv.style.top = "-4rem";
            }
            prevScroll = currentScroll;
        }
    })

    return (
        <div className="Navigation" id="sectorNavigation">
            <nav className={`navBar ${darkTheme ? 'navBar-dark' : 'navBar-light'}`}>
                <ul className="left">
                    <li>
                        <a href="https://www.facebook.com/">
                            <img src={darkTheme ? facebookLogo_dark : facebookLogo_light} alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/">
                            <img src={darkTheme ? githubLogo_dark : githubLogo_light} alt="Github"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <img src={darkTheme ? instagramLogo_dark : instagramLogo_light} alt="Instagram"/>
                        </a> 
                    </li>
                </ul>
                <ul className="right">
                    <li>
                    <FormControlLabel
          value="start"
          control={<Switch color="primary" checked={darkTheme} onChange={toggleTheme}/>}
          label={darkTheme ? 'dark' : 'light'}
          labelPlacement="start"
        />
                    </li>
                    <li><a href="#sectionProjects" className={darkTheme ? 'a-dark' : 'a-light'}>Projects</a></li>
                    <li><a href="#sectionContacts" className={darkTheme ? 'a-dark' : 'a-light'}>Contact me</a></li>
                </ul>
            </nav>
        </div>
    );
};
export default Navigation;