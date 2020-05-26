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
        height: '97vh',
        width: '60vw',
        padding: '1vh 10vw',
        ["@media(max-width: 1200px)"]: {
            padding: '25px',
            width: '100vw'
        },
        ["@media(max-width: 500px)"]: {
            padding: 10
        },

    },
    mainText: {
        paddingTop: "7vh",
        marginTop: 0,
        marginBottom: 0,
        fontSize: '4.5em',
        display: "flex",
        color: "black",
        ["@media(max-width: 1200px)"]: {
            paddingTop: "2vh",
            fontSize: '3.5em'
        },
        ["@media(max-width: 500px)"]: {
            paddingTop: "5vh",
            fontSize: '2.5em'
        },
    },
    secondaryText: {
        width: '40vw',
        color: "black",
        textAlign: "justify",
        fontSize: '24px',
        ["@media(max-width: 1200px)"]: {
            width: '90vw',
            fontSize: '20px'
        },
        ["@media(max-width: 500px)"]: {
            width: '95vw',
            fontSize: '18px'
        },
        ["@media(max-width: 360px)"]: {
            width: '95vw',
            fontSize: '15px'
        },
    },
    name: {
        backgroundImage: "linear-gradient(180deg, rgba(62,157,239,1) 0%, rgba(0,163,255,1) 45%, rgba(62,193,239,1) 100%);",
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        ["@media(max-width: 500px)"]: {
            fontSize: '20px'
        },
        ["@media(max-width: 1200px)"]: {
            fontSize: '24px'
        },
        ["@media(max-width: 380px)"]: {
            fontSize: '18px'
        },
    },
    contactText: {
        display: "flex",
        justifyContent: "center",
        textAlign: 'center',
        ["@media(max-width: 1000px)"]: {
            fontSize: "28px"
        },
        ["@media(max-width: 500px)"]: {
            fontSize: "26px"
        }
    },
    contactButton: {
        background: "linear-gradient(180deg, rgba(62,157,239,1) 0%, rgba(0,163,255,1) 45%, rgba(62,193,239,1) 100%)",
        color: "white",
        borderColor: "3px solid black",
        marginTop: 25
    },
    myName: {
        fontSize: '2.2em',
        paddingTop: 0,
        ["@media(max-width: 500px)"]: {
            fontSize: '20px'
        },
        ["@media(max-width: 1200px)"]: {
            fontSize: '24px'
        },
        ["@media(max-width: 380px)"]: {
            fontSize: '18px'
        },
    },
    link: {
        textDecoration: "none",
        color: "black",
        borderBottom: "5px solid rgba(62,193,239,1)",
        marginLeft: 5,
        "&:hover": {
            transition: "0.3s !important",
            backgroundColor: "rgba(62,193,239,1)"
        }
    },
    landingImg: {
        background: "rgba(0, 0, 0, .3) url('https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: '45vw',
        height: '97vh',
        position: 'absolute',
        top: 0,
        right: 0,
        ["@media(max-width: 1200px)"]: {
            top:'80vh',
            height: '30vh',
            width: '100vw'
        },
    }
})




const LandingHeader = (props) => {
    const classes = useStyles()
    const { t } = useTranslation();

    const handleClick = (event, target) => {
        const anchor = (event.target.ownerDocument || document).querySelector(`#${target}`);

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            <NavBar />
            <div id="back-to-top-anchor" />
            <div>
                <Typography component='div' className={classes.landing}>
                    <Box textAlign={"initial"} component='p' fontWeight={700} className={classes.mainText}>
                        {t("salute")}
                    </Box>
                    <Box textAlign={"initial"} component='p' fontWeight={500} className={`${classes.mainText} ${classes.myName}`}>
                        {t("name")}
                        <Box className={classes.name}>&nbsp;Fabio Pineda</Box>
                    </Box>
                    <Box textAlign={"initial"} component='p' fontWeight={300} className={classes.secondaryText}>
                        {t("description1")}
                        <a href="https://github.com/fabioepb" className={classes.link}>GitHub.</a>
                    </Box>
                    <Box textAlign={"initial"} component='p' fontWeight={300} className={classes.secondaryText}>
                        {t("description2")}
                    </Box>
                    <Box textAlign={"initial"} component='p' fontWeight={300} className={classes.secondaryText}>
                        {t("description3")}
                    </Box>
                    <div className={classes.contactDiv}>
                        <Box textAlign={"initial"} fontWeight={400} fontSize={34} className={classes.contactText}>
                            {t("note1")}
                        </Box>
                        <Button variant="contained" className={classes.contactButton}>
                            <Box textAlign={"initial"} fontWeight={400} fontSize={24} onClick={(e) => handleClick(e, "contact")}>
                                {t("contactMe")}
                            </Box>
                        </Button>
                    </div>
                </Typography>
                <div className={classes.landingImg} />

            </div>
            <ScrollButton />
        </>
    )
}

export default LandingHeader