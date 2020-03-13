/* eslint-disable no-useless-computed-key */
import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    mainContainer: {
        paddingTop: "10vh",
        paddingBottom: "10vh",
        paddingLeft: "5vw",
        color: "black"
    },
    projectsTitle: {
        marginBottom: "5vh",
        ["@media(max-width: 600px)"]: {
            fontSize: "30px"
        }
    },
    projectsSummary: {
        marginBottom: "5vh",
        ["@media(max-width: 600px)"]: {
            fontSize: "20px"
        },
    },
    keystoneTitle: {
        marginBottom: "5vh",
        ["@media(max-width: 600px)"]: {
            fontSize: "30px"
        },
        ["@media(max-width: 1000px)"]: {
            textAlign: "center"
        }
    },
    keystoneInfo: {
        paddingLeft: "10vw",
        ["@media(max-width: 600px)"]: {
            fontSize: "20px"
        },
        ["@media(max-width: 1000px)"]: {
            paddingLeft: 0
        }
    },
    keystoneImg: {
        ["@media(max-width: 900px)"]: {
            width: "400px"
        },
        ["@media(max-width: 400px)"]: {
            width: "300px"
        },
        ["@media(min-width: 1900px)"]: {
            width: "900px"
        }
    },
    keystoneNote: {
        ["@media(max-width: 600px)"]: {
            fontSize: "20px"
        },
        ["@media(max-width: 1000px)"]: {
            paddingRight: "5vw"
        },
    }
})


const LuxminingProject = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <section className={classes.mainContainer}>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item lg={4} md={4} className={classes.keystoneInfo}>
                    <Box textAlign={"center"} fontWeight={700} fontSize={42} className={classes.keystoneTitle} >
                        Luxury Mining
                     </Box>
                    <Box textAlign={"left"} fontWeight={300} fontSize={30} className={classes.keystoneNote} >
                        {t("luxNote")}
                    </Box>
                </Grid>
                <Grid item lg={8} md={8}>
                    <img alt="keystone-app" src="https://i.imgur.com/NEKBleL.png" width={640} className={classes.keystoneImg} />
                </Grid>
            </Grid>
        </section>
    )
}

export default LuxminingProject;