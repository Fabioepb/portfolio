/* eslint-disable no-useless-computed-key */
import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    mainContainer: {
        background: 'linear-gradient(180deg, rgba(62,157,239,1) 0%, rgba(0,163,255,1) 45%, rgba(62,193,239,1) 100%);',
        paddingTop: "10vh",
        paddingBottom: "10vh",
        color: "white"
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
        paddingRight: "5vw",
        ["@media(max-width: 600px)"]: {
            fontSize: "20px"
        },
        ["@media(max-width: 1000px)"]: {
            paddingRight: 0
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
            paddingLeft: "5vw"
        },
    }
})


const KeystoneProject = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <section className={classes.mainContainer}>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item lg={10} md={10}>
                    <Box textAlign={"center"} fontWeight={700} fontSize={42} className={classes.projectsTitle} >
                        {t("workProjects")}
                    </Box>
                </Grid>
                <Container>
                    <Box textAlign={"initial"} fontWeight={300} fontSize={30} className={classes.projectsSummary} id="projects" >
                        {t("projectsNote")}
                    </Box>
                </Container>
                <Grid item lg={8} md={8}>
                    <img alt="keystone-app" src="https://i.imgur.com/ZzKQZxI.png" width={740} className={classes.keystoneImg} />
                </Grid>
                <Grid item lg={4} md={4} className={classes.keystoneInfo}>
                    <Box textAlign={"center"} fontWeight={700} fontSize={42} className={classes.keystoneTitle} >
                        Keystone Real Estate
                     </Box>
                    <Box textAlign={"left"} fontWeight={300} fontSize={30} className={classes.keystoneNote} >
                        {t("keystoneNote")}
                    </Box>
                </Grid>
            </Grid>
        </section>
    )
}

export default KeystoneProject;