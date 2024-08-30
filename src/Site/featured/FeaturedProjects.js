import "./featured.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import card1 from "./image-397405705.png"
import card2 from "./image-1044161487.png"
import card3 from "./ai_copy.png"
import card4 from "./image-1442182607.png"
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";
const FeaturedProjects = () => {
    const {darkTheme, toggleTheme} = useContext(ThemeContext);
    const bgColor = darkTheme ? '#1b3a4b' : '#eddcd2';
    const textColor = darkTheme ? '#ffffff' : '#000000';

    return (
        <div className={`Projects ${darkTheme ? 'Projects-dark' : 'Projects-light'}`} id="sectionProjects">
            <div className={`featuredProjects ${darkTheme ? 'featuredProjects-dark' : 'featuredProjects-light'}`}>
                <div className="titleFeatured">
                    <h1>My projects</h1>
                </div>
                <div className="cards">
                    <div className="card">
                        <Card sx={{ backgroundColor: bgColor }}> 
                            <CardActionArea>
                                <CardMedia
                                sx={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                image={card1}
                                alt="efefefefef">
                                </CardMedia>
                            </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: textColor }}>
                                        Project1
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: textColor }}>
                                        eididjeijdiejd e ceicneidjeice cie ieceicne ei ei eia;dkncda cdn didin ipnd ipnieqm dn ien ienn
                                    </Typography>
                                    <Divider sx={{ borderBottomWidth: 3, margin: '10px 0 10px 0'}}/>
                                    <CardActionArea>
                                    <Typography variant="body3" sx={{fontWeight: 'bold',color: textColor}}>
                                        <p>See more</p>
                                    </Typography>
                                    </CardActionArea>
                                </CardContent>
                        </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ backgroundColor: bgColor }}>
                                <CardActionArea>
                                <CardMedia
                                sx={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                image={card2}
                                alt="efefefefef">
                                </CardMedia>
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: textColor }}>
                                        Project2
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: textColor }}>
                                        eididjeijdiejd e ceicneidjeice cie ieceicne ei ei eia;dkncda cdn didin ipnd ipnieqm dn ien ienn
                                    </Typography>
                                    <Divider sx={{ borderBottomWidth: 3, margin: '10px 0 10px 0'}}/>
                                    <CardActionArea>
                                    <Typography variant="body3" sx={{fontWeight: 'bold',color: textColor}}>
                                        <p>See more</p>
                                    </Typography>
                                    </CardActionArea>
                                </CardContent>
                        </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ backgroundColor: bgColor }}>
                    <CardActionArea>
                                <CardMedia
                                sx={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                image={card3}
                                alt="efefefefef">
                                </CardMedia>
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: textColor }}>
                                        Project3
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: textColor }}>
                                        eididjeijdiejd e ceicneidjeice cie ieceicne ei ei eia;dkncda cdn didin ipnd ipnieqm dn ien ienn
                                    </Typography>
                                    <Divider sx={{ borderBottomWidth: 3, margin: '10px 0 10px 0'}}/>
                                    <CardActionArea>
                                    <Typography variant="body3" sx={{fontWeight: 'bold',color: textColor}}>
                                        <p>See more</p>
                                    </Typography>
                                    </CardActionArea>
                                </CardContent>
                        </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ backgroundColor: bgColor }}>
                    <CardActionArea>
                                <CardMedia
                                sx={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                image={card4}
                                alt="efefefefef">
                                </CardMedia>
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: textColor }}>
                                        Project4
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: textColor }}>
                                        eididjeijdiejd e ceicneidjeice cie ieceicne ei ei eia;dkncda cdn didin ipnd ipnieqm dn ien ienn
                                    </Typography>
                                    <Divider sx={{ borderBottomWidth: 3, margin: '10px 0 10px 0'}}/>
                                    <CardActionArea>
                                    <Typography variant="body3" sx={{fontWeight: 'bold',color: textColor}}>
                                        <p>See more</p>
                                    </Typography>
                                    </CardActionArea>
                                </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        );
};
export default FeaturedProjects;