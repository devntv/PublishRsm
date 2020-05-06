import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box, } from "@material-ui/core";
import Navbar from "./Navbar";
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    mainContainer:{
        background: "#282c34",
        
    },
    timeLine:{
        position: "relative",
        padding: "1rem",
        margin:" 0 auto",
        "&:before": {
            content :" '' ",
            position:"absolute",
            height:"100%",
            border:" 1px solid tomato",
            right: "40px",
            top:0
        },
        "&:after":{
            content: " '' ",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:" auto"
            }
        }
    },

    timeLineItem:{
        padding: "1rem",
        border: "1px solid tomato",
        position:"relative",
        borderRadius: "5px",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after":{
            content: " '' ",
            position: "absolute",
        },
        "&:before":{
            content: " '' ",
            position: "absolute",
            right:"-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:" solid",
            borderColor:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:"tomato"
            },
            "&:nth-of-type(2n):before":{
                right: "auto",
                left:"-0.625rem",
                borderColor:"transparent transparent tomato tomato "
            }
        }
    },

    timeLineYear:{
        textAlign: "center",
        maxWidth:"9.375rem",
        margin: "0 3rem 0  auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding:"0.5rem 0 1rem ",
        "&:before":{
            display: "none"
        },
        [theme.breakpoints.up("md")]:{
        textAlign:"center",
        margin: "0 auto ",
        "&:nth-of-type(2n)":{
            float:"none",
            margin: "0 auto"
        },
        "&:nth-of-type(2n):before":{
            display: "none",

        }
      }
    },
    heading:{
        color:"tomato",
        padding:"3rem 0",
        // textTransform:"uppercase",
        marginTop:"20px"
    },
    subHeading:{
        color:"white",
        padding:"0",
        textTransform:"uppercase",
        borderRight:"1px solid #00e49a",
        "&:hover":{
            borderBottom: "1px solid #0e82a6",
            transition:"all 0.3s",
            color:"#85c2bf",    
        }
    },
    subDes:{
        borderLeft:"1px solid #00e49a"
    },
    vinhProjectHover:{
        transition: "all .2s",
        color:"tomato" ,
        border:"1px solid red",
        borderRadius:"3px", 
        display:"block", 
        width:"50%",
        margin:"0 auto", 
        textDecoration:"none",
        "&:hover":{
            background:"#0e82a6",
            borderBottom: "2px solid #00e49a",
            borderLeft: "1px solid #0e82a6",
            borderRight: "1px solid #0e82a6",
            borderTop: "2px solid #00e49a",
            color:"white",
            textDecoration:"none",
            borderRadius:"8px"
        }
    }

}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
           <Navbar />
           <Box component ="header" className={classes.mainContainer}>
                <Typography  className={classes.heading} variant="h4" align="center">
                        Resume Project
                </Typography>
                <Box component="div" className={classes.timeLine}>
                        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                                Project 1
                        </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography variant="h5" align="center" className={classes.subHeading}>
                                React developer
                            </Typography>
                            <Typography variant="body1" align="center" style={{color:"#00e49a"}} className={classes.subDes}>
                            List Manager Work of Daily
                            </Typography>
                            <Typography variant="subtitle1" align="center" style={{color:"white"}}>
                                
The project manages daily tasks with the reactJS library developed by Facebook. With functions including: add, delete, edit, update, search, ... but only support responsive on the computer

                            <Link className={classes.vinhProjectHover} href="http://vinhwork.000webhostapp.com" target="_blank">
                                My project react 1
                            </Link>
                            </Typography>
                        </Box>


                            {/* timeline 2 */}


                            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                                Project 2
                        </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography variant="h5" align="center" className={classes.subHeading}>
                                React movie website
                            </Typography>
                            <Typography variant="body1" align="center" style={{color:"#00e49a"}} className={classes.subDes}>
                                Website movie Cyber
                            </Typography>
                            <Typography variant="subtitle1" align="center" style={{color:"white"}}>
                            ReactJS là một thư viện JavaScript mã nguồn mở được thiết kế bởi Facebook
                             để tạo ra những ứng dụng web hấp dẫn, 
                             nhanh và hiệu quả với mã hóa tối thiểu.
                              Mục đích cốt lõi của ReactJS không chỉ khiến cho 
                              trang web phải thật mượt mà còn phải nhanh, khả năng mở rộng cao và đơn giản.
                            <Link className={classes.vinhProjectHover} href="#"
                            onClick={() => {
                              alert("chưa hoàn thành :((.");
                            }} >
                                Project 2 is comming soon...
                            </Link>
                            </Typography>
                        </Box>

                                    {/* timeline 3 */}

                        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                                Project 3
                        </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography variant="h5" align="center" className={classes.subHeading}>
                                React Movie Website
                            </Typography>
                            <Typography variant="body1" align="center" style={{color:"#00e49a"}} className={classes.subDes}>
                                WEBSITE -NETFLIX
                            </Typography>
                            <Typography variant="subtitle1" align="center" style={{color:"white"}}>
                            ReactJS là một thư viện JavaScript mã nguồn mở được thiết kế bởi Facebook để tạo ra những ứng dụng web hấp dẫn, nhanh và hiệu quả với mã hóa tối thiểu. Mục đích cốt lõi của ReactJS không chỉ khiến cho trang web phải thật mượt mà còn phải nhanh, khả năng mở rộng cao và đơn giản.
                            </Typography>
                        </Box>

                        {/* timeline 4 */}

                        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                                Project 4
                        </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography variant="h5" align="center" className={classes.subHeading}>
                                Chưa nghĩ ra
                            </Typography>
                            <Typography variant="body1" align="center" style={{color:"#00e49a"}} className={classes.subDes}>
                                chưa nghĩ ra
                            </Typography>
                            <Typography variant="subtitle1" align="center" style={{color:"white"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </Typography>
                        </Box>
                </Box>
           </Box>
        </>
    )
}

export default Resume
