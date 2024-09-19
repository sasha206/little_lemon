import styled from "styled-components";
import HeaderImg from "../home/restauranfood.jpg"
import Typography from "antd/es/typography/Typography";
import Header from "./home_components/header_component/Header_Home";
import WeekSpecials from "./home_components/week_specials_component/week_Specials";

const Home = () => {
    return(
        <div>
            <Header/>
            <Header/>
            <WeekSpecials/>
        </div>
    )
}

export default Home;