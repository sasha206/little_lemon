import "./blog.css";
import avatar_dark from './Floppa-PNG-Pic.png'
import avatar_light from './doge.png'
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";
const Blog = () => {

    const {darkTheme, toggleTheme} = useContext(ThemeContext);

    return(
    <div className={`bio ${darkTheme ? 'bio-dark' : 'bio-light'}`}>
        <div className="blog_bio">
            <div className="introduce">
                <h1>Book now!</h1>
            </div>
        </div>
    </div>
    );
};
export default Blog;