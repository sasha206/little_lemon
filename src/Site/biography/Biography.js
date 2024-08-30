import "./biography.css";
import avatar_dark from './Floppa-PNG-Pic.png'
import avatar_light from './doge.png'
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";
const Biography = () => {

    const {darkTheme, toggleTheme} = useContext(ThemeContext);

    return(
    <div className={`bio ${darkTheme ? 'bio-dark' : 'bio-light'}`}>
        <div className="blog_bio">
            <div className="avatar">
                <a href="https://youtu.be/dQw4w9WgXcQ">
                <img src={darkTheme ? avatar_dark : avatar_light}
                 alt="logo"
                 />
                </a>
                <h3>{darkTheme ? 'Hi, I am Floppa' : 'Hi, I am Doge'}</h3>
            </div>
            <div className="introduce">
                <h1>It`s my first site.</h1>
            </div>
        </div>
    </div>
    );
};
export default Biography;