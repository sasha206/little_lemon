import styled from "styled-components";
import HeaderImg from "../header_component/restauranfood.jpg"
import Typography from "antd/es/typography/Typography";
import { Button } from "antd";
const CustomButton = styled(Button)`
  background-color: #F4CE14;
  border: none;
  color: black;
  font-size: 18px;
  text-decoration: none;
  border-radius:11px;
  margin-left:6px;
  &:hover {
        background-color: #BBBBBB;
    }
`;
const Title = styled.h1`
    color: #f4ce14;
    font-family: 'Markazi Text', serif;
    font-weight: 500;
    font-size: 40pt;
    margin:0;

    `;
const Subtitle = styled.h1`
    color: white;
    font-family: 'Markazi Text', serif;
    font-weight: 500;
    font-size: 3pt;
    margin:0;
    padding-bottom:0px;
`;
const Paragraph = styled.p`
    color: white;
    font-family: 'Karla', sans-serif;
    font-size: 16pt;
    font-weight: 400;
`;
const HomeStyled = styled.div`
    background-color: rgb(73, 94, 87);
    margin-bottom:25vh;



`;
const BackgroundHeaderStyled = styled.header`
    height: 450px;

`;
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin: 0 120px;
  padding: 40px 0;


`;
const ArticleHeader = styled.article`
    max-width: 20%;
    h1 {
        font-family: 'Markazi Text', serif;
        font-weight: 500;
        font-size: 40pt;
        margin:0;
    };
    h2 {
        font-family: 'Markazi Text', serif;
        font-weight: 500;
        font-size: 18pt;
        margin:0;
    }
    `;
const ImgHeader = styled.img`
  width: 30%; 
  height: auto;
  border-radius: 10px; 
`;

const Header = () => {
    return(
        <HomeStyled>
            <BackgroundHeaderStyled>
                <HeaderStyled>
                    <ArticleHeader>
                        <Title>Little Lemon</Title>
                        <Subtitle>Chicago</Subtitle>
                        <Paragraph>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Paragraph>
                        <CustomButton href="/reservations">Reserve a Table</CustomButton>
                    </ArticleHeader>
                    <ImgHeader src={HeaderImg}/>
                </HeaderStyled>
            </BackgroundHeaderStyled>


        </HomeStyled>
    )
}

export default Header;