import React from 'react'
import Navbar from "./Navbar"
import Zoom from 'react-reveal/Zoom';
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box, } from "@material-ui/core";
import Typed from 'react-typed';
import './CssAlone.css'

const useStyles = makeStyles({
    textZoom: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },


})
const Alone = () => {
    const classes = useStyles();
    return (
      <>

            <Navbar />
            <div className='hh'>
            <Box className={classes.textZoom} >
                {/* <Zoom > */}
                    <Typography style={{
                        fontSize: "270px"
                        , position: "absolute",
                        top: "50%", left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "black"
                    }}>
                        {/* <Typed strings={['💗','💕']}  
                                                            typeSpeed={40}
                                                            backSpeed={50}> 
                                                            
                                                            
                                                    </Typed>     */}

                        {/* <Loyalty style={{ fontSize: "250px",}} /> */}
                    </Typography> 
                    <Typed style={{ color: "tomato", fontSize: "20px",textTransform: "uppercase" }} strings={['this website is all of something that i make project  ', 'and upload all information about it.'

                    ]}
                        typeSpeed={40}
                        backSpeed={50}>
                        {/* <Typography >the owner of this website</Typography> */}

                    </Typed>
                {/* </Zoom> */}
            </Box>
        </div>

        </>
    )
}

export default Alone
