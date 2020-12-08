import React from 'react'
import Navbar from "./Navbar";
import Header from "./Header"
import Particles from 'react-particles-js';
import {makeStyles} from "@material-ui/styles"

//style
const useStyles = makeStyles({
    ParticipleCanvas:{
        position:"absolute",
        opacity:"0.85"
    }
});
const Home = () => {
    const classes = useStyles();
    return (
        <>
           <Navbar />
           <Header/>
           {/* <Particles  
           canvasClassName={classes.ParticipleCanvas}
           params ={{
               particles:{
                   number:{
                       value:35,
                       destiny:{
                           enable:true,
                           value_area:1803.4120608655228
                       }
                   },
                   shape:{
                       type:"circle",
                       stroke:{
                           width: 3,
                           color:"tomato"
                       },
                       polygon:{
                        nb_sides:4
                       }
                   },
                   size:{
                       value:15,
                       random: true,
                       anim:{
                           enable: false,
                           speed: 10,
                           size_min: 0.5,
                           sync: false
                       }
                   },
                //    interactivity: {
                //     events: {
                //         onhover: {
                //             enable: false,
                //             mode: "repulse"
                //         }
                //     }
                // }
                   
               }
           }} 
           /> */}
        </>
    )
}

export default Home
