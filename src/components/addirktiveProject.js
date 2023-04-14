/* eslint-disable no-useless-computed-key */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles()({
    mainContainer: {
        background:
            "linear-gradient(180deg, rgba(62,157,239,1) 0%, rgba(0,163,255,1) 45%, rgba(62,193,239,1) 100%);",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        color: "white",
    },
    projectsTitle: {
        marginBottom: "5vh",
        ["@media(max-width: 600px)"]: {
            fontSize: "30px",
        },
    },
    projectsSummary: {
        marginBottom: "5vh",
        ["@media(max-width: 600px)"]: {
            fontSize: "20px",
        },
    },
    title: {
        marginBottom: "5vh",
        ["@media(max-width: 600px)"]: {
            fontSize: "30px",
        },
        ["@media(max-width: 1000px)"]: {
            textAlign: "center",
        },
    },
    Information: {
        paddingRight: "5vw",
        ["@media(max-width: 600px)"]: {
            fontSize: "20px",
        },
        ["@media(max-width: 1000px)"]: {
            paddingRight: 0,
        },
    },
    Image: {
        width: "500px",
        "@media(max-width: 900px)": {
            width: "400px",
        },
        "@media(max-width: 400px)": {
            width: "300px",
        },
    },
    donorkitNote: {
        marginLeft: 20,
        ["@media(max-width: 600px)"]: {
            fontSize: "20px",
        },
        ["@media(max-width: 1000px)"]: {
            paddingLeft: "5vw",
        },
    },
});

const AddirktiveProject = () => {
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <section className={classes.mainContainer}>
            <Container>
                <Grid marginX={'auto'} item lg={10} md={10}>
                    <Box
                        textAlign={"center"}
                        fontWeight={700}
                        fontSize={42}
                        className={classes.projectsTitle}
                    >
                        {t("workProjects")}
                    </Box>
                </Grid>
                <Box
                    textAlign={"initial"}
                    fontWeight={300}
                    fontSize={30}
                    className={classes.projectsSummary}
                    id="projects"
                >
                    {t("projectsNote")}
                </Box>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Box
                        marginX={'auto'}
                        textAlign={"center"}
                        fontWeight={700}
                        fontSize={46}
                        className={classes.title}
                    >
                        addirktive Dashboard
                    </Box>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <img
                                alt="donorkit-app"
                                style={{ maxWidth: '80vw' }}
                                src="https://i.imgur.com/dGktLDJ.png"
                                className={classes.Image}
                            />
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                            sm={12}
                            className={classes.Information}
                        >
                            <Box
                                textAlign={"left"}
                                fontWeight={300}
                                fontSize={30}
                                className={classes.donorkitNote}
                            >
                                {t("addirktive1")}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid
                        style={{ marginTop: 50 }}
                        container
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                            sm={12}
                            className={classes.Information}
                        >
                            <Box
                                textAlign={"left"}
                                fontWeight={300}
                                fontSize={30}
                                mb="25px"
                                className={classes.donorkitNote}
                            >
                                {t("addirktive2")}
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <img
                                alt="addirktive-app-mobile"
                                height={300}
                                style={{ maxWidth: '80vw' }}

                                src="https://i.imgur.com/CJQHzk9.png"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default AddirktiveProject;
