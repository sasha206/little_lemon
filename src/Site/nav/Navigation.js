import "./nav.css";
import Logo from "./Logo .svg"
import LogoHome from "./home icon.svg"
import LogoRecent from "./Recent.svg"
const Navigation = () => {;
    return (
        <div className="Navigation" id="sectorNavigation">
            <nav className='navBar'>
                <img src={LogoHome}/>
                <img src={Logo}/>
                <img src={LogoRecent}/>
            </nav>
        </div>
    );
};
export default Navigation;