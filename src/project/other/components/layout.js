import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer";
const Layout =() => {
    return(
        <div>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;