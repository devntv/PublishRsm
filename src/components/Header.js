import React from 'react';
import {Avatar, Typography, Box,  Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import avatar1 from "../avatar1.jpg";
import Typed from 'react-typed';

//css style 
const useStyles = makeStyles(theme=>({
    avatar:{
        width :theme.spacing(15),
        height :theme.spacing(15),
        margin:theme.spacing(1),
    },
    title:{
        color:"#383839"
    },
    subTitle:{
        color:"tomato",
        marginBottom:"3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        width:"100vw",
        textAlign: "center",
        zIndex: 1
    }
}))
const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar1} alt="Dinh handsome "/> 
            </Grid>          
            <Typography className={classes.title}  variant="h4">
            <Typed
                strings={[
                    'NT Vinh Nguyen',]}                
                    typeSpeed={40}
                    backSpeed={50}   
                    >          
                </Typed>
            </Typography>
            <br />
            <Typography className={classes.subTitle}  variant="h5">
            <Typed
                strings={[
                    'Hello World  ✔',
                    'Hello anyOne ✔  ',
                    'Hello and have a good day ❤️️',
                    'Hello and have a good month 💙',
                    'Hello and have a good year 💚',
                    'Hello and have a good next year 💛',
                    'AND',
                    'Happy Lucking or have a good life 💕']}
                    typeSpeed={40}
                    backSpeed={50}   
                    
                    >          
                </Typed>
            </Typography>

        </Box>
    )
}

export default Header
