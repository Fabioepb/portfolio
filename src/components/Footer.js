/* eslint-disable no-useless-computed-key */
import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    mainContainer: {
        paddingTop: "1vh",
        paddingBottom: "1vh",
        color: "white",
        backgroundColor: "#3e9def",
        fontSize: "12px"
    },
    footerText: {
        display: "flex",
        flexDirection: "row"
    },
    copyrightText: {
        display: "flex",
        flexDirection: "column",
        paddingTop:"10px"
    }
})


const Footer = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <section className={classes.mainContainer}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item lg={12} md={12}>
                    <Box textAlign={"center"} fontWeight={500} fontSize={14} className={classes.footerText} >
                        {t("footerText1")}
                        <i className="fas fa-heart" style={{color: "red", "padding-right":"5px","padding-left":"5px", "padding-top":"3px"}}/>
                        &
                        <i class="fas fa-coffee"  style={{color: "#c3c3c3", "padding-right":"5px","padding-left":"5px", "padding-top":"3px"}}></i>
                        {t("footerText2")}
                    </Box>
                </Grid>
                <Grid item lg={12} md={12}>
                    <Box textAlign={"center"} fontWeight={500} fontSize={14} className={classes.copyrightText} >
                        {t("copyright")}
                        <br/>
                        {t("copyright2")}
                    </Box>
                </Grid>
            </Grid>
        </section>
    )
}

export default Footer;