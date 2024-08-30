import "./footer.css";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Footer = () => {
    const {darkTheme, toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <footer className={`Footer ${darkTheme ? 'Footer-dark' : 'Footer-light'}`}>
                <p>Oleksandr 2024</p>
            </footer>
        </div>
    );
};
export default Footer;
