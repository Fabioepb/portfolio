/* eslint-disable no-useless-computed-key */
import React from "react";
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import NavBar from "./navBar"
import ScrollButton from './ScrollButton';

const useStyles = makeStyles({
    landing: {
        background: "rgba(0, 0, 0, .65) url('https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: window.innerHeight * 0.97,
    },
    mainText: {
        paddingTop: "25vh",
        marginLeft: 75,
        display: "flex",
        color: "white",
        fontSize: "46px",
        ["@media(max-width: 800px)"]:{
            fontSize: "32px",
            marginLeft: 35,
            paddingTop: "25vh"
        },
        ["@media(max-width: 500px)"]:{
            flexDirection:"column",
            textAlign:"center",
            margin:0
        },
        ["@media(min-width: 2000px)"]:{
            fontSize: "80px",
            marginLeft: 35,
            paddingTop: "25vh"
        },
    },
    secondaryText: {
        marginLeft: 100,
        color: "lightgray",
        ["@media(max-width: 800px)"]:{
            fontSize: "28px",
            marginLeft: 50
        },
        ["@media(max-width: 500px)"]:{
            fontSize: "22px",
            textAlign:"center",
            margin:0
        }
    },
    name: {
        color: "#3e9def",
        ["@media(max-width: 500px)"]:{
            fontSize: "32px",

        }
    },
    contactText:{
        paddingTop: "25vh",
        display: "flex",
        justifyContent:"center",
        color: "white",
        ["@media(max-width: 1000px)"]:{
            fontSize: "28px"
        },
        ["@media(max-width: 500px)"]:{
            fontSize: "26px"
        }
    },
    contactButton:{
        backgroundColor: "#3e9def",
        color:"white",
        borderColor: "3px solid black",
        marginTop: 25
    }
})




const LandingHeader = (props) => {
    const classes = useStyles()
    const { t } = useTranslation();

    const handleClick = (event,target) => {
        const anchor = (event.target.ownerDocument || document).querySelector(`#${target}`);

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            <NavBar/>
                <div id="back-to-top-anchor" />
            <Typography component='div' className={classes.landing}>
                <Box textAlign={"initial"} fontWeight={700} fontSize={42} className={classes.mainText}>
                    {t("name")}
                    <Box className={classes.name}>&nbsp;Fabio Pineda</Box>
                </Box>
                <Box textAlign={"initial"} fontWeight={400} fontSize={32} className={classes.secondaryText}>
                    {t("jobTitle")}
                </Box>
                <Box textAlign={"initial"} fontWeight={400} fontSize={34} className={classes.contactText}>
                    {t("note1")}
                </Box>
                <Button variant="contained"  className={classes.contactButton}>
                    <Box textAlign={"initial"} fontWeight={400} fontSize={24} onClick={(e)=>handleClick(e,"contact")}>
                        {t("contactMe")}
                    </Box>    
                </Button>
            </Typography>
            <ScrollButton/>
        </>
    )
}

export default LandingHeader