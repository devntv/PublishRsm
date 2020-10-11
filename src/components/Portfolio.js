import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg"
const userStyles = makeStyles({
    mainContainer:{
        background:"#5d5d6c",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        // margin: "3rem",
         margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = userStyles();
  return (
    <Box component="div" className ={classes.mainContainer}>
      <Navbar />
      <Typography  variant="h4" align="center">
                        Resume and my Project
                </Typography>
      <Grid container justify="center" >
          {/* project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                  <Typography variant="h5" gutterBottom>
                        Target in 1 Year
                  </Typography>
                  <Typography variant="body2" color="textSecondary"  component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </Typography>
              </CardContent>
            </CardActionArea>  
              <CardActions>
                  <Button size="small" color="primary">
                        share
                  </Button>
                  <Button href="https://www.w3schools.com/" target="_blank" size="small" color="primary">
                        Document
                  </Button>
              </CardActions>  
          </Card>
          </Grid>
          {/* PROJECT 2 */}
          <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                  <Typography variant="h5" gutterBottom>
                  target for the next 2years
                  </Typography>
                  <Typography variant="body2" color="textSecondary"  component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                        share
                  </Button>
                  <Button  href="https://nodejs.org/en/docs/" target="_blank" size="small" color="primary">
                  Document
                  </Button>
              </CardActions>   
            </Card>
        </Grid>
        {/* project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                  <Typography variant="h5" gutterBottom>
                  target after the 3rd year
                  </Typography>
                  <Typography variant="body2" color="textSecondary"  component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                        share
                  </Button>
                  <Button href="https://reactjs.org/" target="_blank" size="small" color="primary">
                  Document
                  </Button>
              </CardActions>
            </Card>
        </Grid>
        {/* project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                  <Typography variant="h5" gutterBottom>
                        my promise target :)
                  </Typography>
                  <Typography variant="body2" color="textSecondary"  component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                        share
                  </Button>
                  <Button href="https://viblo.asia/p/gioi-thieu-mern-stack-bWrZnv4vZxw" target="_blank" size="small" color="primary">
                  Document
                  </Button>
              </CardActions> 
            </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
