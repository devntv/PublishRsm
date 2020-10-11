import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Typography, Box} from "@material-ui/core"
import {MenuOpen,FavoriteBorder, GitHub, AssignmentInd, Home, BorderColor, ContactMail, Loyalty} from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import avatar1 from "../New.png";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import Brightness4Icon from '@material-ui/icons/Brightness4';
//import {ThemeProvider, createGlobalStyle} from 'styled-components';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

//css style 
const useStyles =makeStyles(theme =>({
    menuSliderContainer: {
        width: 250,
        background: "#282c34",
        height: "100%",
      
    },
    avatar:{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(14),
        height:theme.spacing(14)
    },
    colorResmue:{
        color:"white"
    },
    colorIconResmue:{
        color:"#61dafb"
    },
    gitHubLink:{
        flex:"1",
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <CodeIcon />,
        listText: "Resume Project",
        listPath: "/my-resume"
    },

    {
        listIcon: <UnarchiveIcon />,
        listText: "My target",
        listPath: "/my-target"
    },

    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath:"/contacts"
    },
    {
        listIcon: <InfoIcon />,
        listText: " About ",
        listPath:"/I-troduce"
    }
]

const Navbar = () => {
    const[state,setState] = useState({
        right: false
    })

    const toggleSlider = (slider,open) =>() =>{
        setState({...state, [slider]:open})
        setClick(false)
    }

    // 
    const [click, setClick] = useState(true);
    const menuHandle =()=> setClick(!click);
    

    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick ={toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src ={avatar1} alt="NT Vinh Nguyen"/>
        <Divider />
        <List>
            {menuItems.map((lsItem,key)=>(
                <ListItem button key={key} className ={classes.colorResmue} component ={Link} to ={lsItem.listPath}>
                <ListItemIcon className={classes.colorIconResmue}> {lsItem.listIcon}</ListItemIcon>   
                <ListItemText primary ={lsItem.listText}/>
                </ListItem>
            ))}
        </List>
        </Box>
    )

    return (
       
            <>
           
        <Box component="nav" >
            <AppBar position ="fixed" style ={{background:"#20232a"}}>
                <Toolbar >
                    <IconButton style={{color:"#61dafb"}} onClick ={toggleSlider("right",true)}>
                         { click ? <  MenuIcon  style={{color:"#61dafb",fontSize:"40px",transition:"all 2s ease-out"}} /> :<CloseIcon style={{color:"#61dafb",fontSize:"40px",transition:"all 2s ease-out"}}/> }
                    </IconButton>  
                    <Toolbar className ={classes.gitHubLink}>
                    <Typography  variant="h6" style={{color:"#f8f8f8",marginLeft:"-30px"}}>
                             <span style={{color:"#c6ff92"}}>My </span>M<span  style={{color:"#00e49a"}}>e̳</span>n<span  style={{color:"#fff"}}>u</span>
                    </Typography>  
                    {/* <Brightness4Icon style={{color:"fff",marginLeft:"5px", cursor:"pointer"}} />        */}
                    </Toolbar>                               
                         <MobilRightMenuSlider 
                                anchor="right" 
                                open={state.right}
                                onClose={toggleSlider("right",false)}
                                onClick ={menuHandle}
                               
                          >{sideList("right")}
                          <Footer/>
                          </MobilRightMenuSlider>  
                             <IconButton href="https://github.com/devntv" target="_blank">
                                        <GitHub  style={{color:"white"}}/>
                                        {/* <a href="http://vinhwork.000webhostapp.com" target="_blank"></a> */}
                            </IconButton>                                   
                </Toolbar>                  
            </AppBar>          
        </Box>


        </>
       
    )
}

export default Navbar
