/* eslint-disable no-useless-computed-key */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';

const useStyles = makeStyles()({
  mainContainer: {
    background:
      "white",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    color: "black",
    zIndex: 150,
  },
  projectsTitle: {
    marginBottom: "5vh",
    zIndex: 150,
    position: "relative",
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
    position: "relative",
    zIndex: 150,
    textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    ["@media(max-width: 600px)"]: {
      fontSize: "30px",
    },
    ["@media(max-width: 1000px)"]: {
      textAlign: "center",
    },
  },
  Information: {
    paddingRight: "5vw",
    position: "relative",
    zIndex: 150,
    ["@media(max-width: 600px)"]: {
      fontSize: "20px",
    },
    ["@media(max-width: 1000px)"]: {
      paddingRight: 0,
    },
  },
  Image: {
    width: "300px",
    zIndex: 150,
    position: "relative",
    userSelect: "none",
    pointerEvents: "none",
    "@media(max-width: 900px)": {
      width: "300px",
    },
    "@media(max-width: 400px)": {
      width: "300px",
    },
  },
  note: {
    marginLeft: 20,
    zIndex: 150,
    position: "relative",
    ["@media(max-width: 600px)"]: {
      fontSize: "20px",
    },
    ["@media(max-width: 1000px)"]: {
      paddingLeft: "5vw",
    },
  },
});

const BitesProject = () => {
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
            Bites App
          </Box>
          <Grid container justify="space-between" alignItems="center">
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <img
                alt="bites-app"
                src="https://i.imgur.com/VMBBqZ1.png"
                className={classes.Image}
                style={{ maxWidth: '90vw' }}
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
                {t("bitesNote")}
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
                {t("bitesNote2")}
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <img
                alt="bites-app-mobile"
                height={450}
                style={{ maxWidth: '96vw', userSelect: "none", pointerEvents: "none" }}
                src="https://i.imgur.com/r8K0r07.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BitesProject;
