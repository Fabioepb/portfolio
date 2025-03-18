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
      "white",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    color: "black",
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
  note: {
    marginLeft: 20,
    ["@media(max-width: 600px)"]: {
      fontSize: "20px",
    },
    ["@media(max-width: 1000px)"]: {
      paddingLeft: "5vw",
    },
  },
});

const DonorkitProject = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.mainContainer}>
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Box
            marginX={'auto'}
            textAlign={"center"}
            fontWeight={700}
            fontSize={46}
            className={classes.title}
          >
            Donorkit Raise
          </Box>
          <Grid container justify="space-between" alignItems="center">
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <img
                alt="donorkit-app"
                src="https://i.imgur.com/0aWTtXI.png"
                className={classes.Image}
                style={{ maxWidth: '80vw' }}
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
                {t("donorkitNote")}
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
                {t("donorkitNote2")}
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <img
                alt="donorkit-app-mobile"
                height={350}
                style={{ maxWidth: '80vw' }}
                src="https://i.imgur.com/LnYh4It.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default DonorkitProject;
