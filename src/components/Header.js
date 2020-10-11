import React from 'react';
import {Avatar, Typography, Box,  Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import avatar1 from "../New.png";
import Typed from 'react-typed';
import ReactPlayer from 'react-player'

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
        zIndex: 1,
       
        
    },
    typedContainer2:{
        position:"absolute",
        top:"80%",
        left:"0%",
        // transform: "translate(-50%, -50%)",
        width:"100vw",
        textAlign: "center",
        zIndex: 1,
       
        
    },
    cssVideo:{
        opacity: "0.3",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        marginTop:"5%",
        border:" 0.5px solid #61dafb",
        width: "579px !important",
        height:"329px !important"
    }
}))
const listUrl =['https://www.youtube.com/watch?v=X_o_4WdFbYk','https://www.youtube.com/watch?v=2u82tF5uk9s']
const Header = () => {
    const classes = useStyles();

    return (   
          <>
          
        {/* <div className={classes.typedContainer2 }> */}
        <div  >
            <ReactPlayer  loop ={true} playing={true}  className={classes.cssVideo} 
             url={listUrl} />    
        </div>
        <Box className={classes.typedContainer } >
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
                    'Hello , Who is here ?  ',
                    'Happy Lucking 💕']}
                    typeSpeed={40}
                    backSpeed={50}                     
                    >          
                </Typed>
            </Typography>
        </Box>   
        </>   
    )
}

export default Header
