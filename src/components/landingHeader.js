/* eslint-disable no-useless-computed-key */
import React from "react";
import { makeStyles } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import NavBar from "./navBar";
import ScrollButton from "./ScrollButton";
import { Container } from "@mui/material";
import clsx from "clsx";
import CornerDotsSVG from "./svg/cornerDotsSVG";

const useStyles = makeStyles()({
  landing: {
    height: "97vh",
    width: "100%",
    position: "relative",
  },
  mainText: {
    paddingTop: "7vh",
    marginTop: 0,
    marginBottom: 0,
    fontSize: "50px",
    zIndex: 150,
    position: "relative",
    textShadow: "1px 1px 2px black",
    display: "flex",
    color: "white",
    ["@media(max-width: 1300px)"]: {
      paddingTop: "10vh",
      fontSize: "3.5em",
    },
    ["@media(max-width: 500px)"]: {
      paddingTop: "10vh",
      fontSize: "2.5em",
    },
  },
  secondaryText: {
    width: "100%",
    color: "white",
    textAlign: "justify",
    zIndex: 150,
    position: "relative",
    fontSize: "30px",
    textShadow: "1px 1px 2px black",
    marginBottom: 25,
    ["@media(max-width: 1300px)"]: {
      width: "90vw",
      fontSize: "20px",
    },
    ["@media(max-width: 500px)"]: {
      width: "90vw",
      fontSize: "20px",
    },
    ["@media(max-width: 360px)"]: {
      width: "90vw",
      fontSize: "18px",
    },
  },
  name: {
    color: "white",

    textShadow: "1px 1px 2px black",
    ["@media(max-width: 500px)"]: {
      fontSize: "20px",
    },
    ["@media(max-width: 1300px)"]: {
      fontSize: "24px",
    },
    ["@media(max-width: 380px)"]: {
      fontSize: "18px",
    },
  },
  contactText: {
    display: "flex",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    textShadow: "1px 1px 2px black",
    zIndex: 150,
    position: "relative",
    ["@media(max-width: 1000px)"]: {
      fontSize: "23px",
    },
    ["@media(max-width: 500px)"]: {
      fontSize: "22px",
    },
  },
  contactButton: {
    background: "#3EA7ED",
    color: "black",
    // borderColor: '3px solid black',
    marginTop: 10,
    zIndex: 150,
    position: "relative",
    "&:hover": {
      transition: "0.3s !important",
      backgroundColor: "#399CDFFF",
    },
  },
  myName: {
    fontSize: "2.2em",
    paddingTop: 0,
    display: "flex",
    color: "white",
    textShadow: "1px 1px 2px black",
    ["@media(max-width: 500px)"]: {
      fontSize: "20px",
    },
    ["@media(max-width: 1300px)"]: {
      fontSize: "24px",
    },
    ["@media(max-width: 380px)"]: {
      fontSize: "18px",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      borderBottom: "5px solid rgb(243,243,243)",
      transition: "0.1s !important",
      // backgroundColor: 'rgb(0,249,250)',
    },
  },
  mainDiv: {
    display: "flex",
    flexDirection: "row",
    ["@media(max-width: 1300px)"]: {
      flexDirection: "column",
    },
  },
  background: {
    position: "relative",
  },
  container: {
    borderLeft: "3px dotted #5e5e5e3b",
    borderRight: "3px dotted #5e5e5e3b",
  },
});

const LandingHeader = (props) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const handleClick = (event, target) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${target}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Box className={clsx("landing-bg", classes.background)}>
      <NavBar />
      <div id="back-to-top-anchor" />
      <CornerDotsSVG />
      <Container className={classes.container} height="100vh" width="100%">
        <div className={classes.mainDiv}>
          <Typography component="div" className={classes.landing}>
            <Box
              textAlign={"initial"}
              component="div"
              fontWeight={700}
              className={classes.mainText}
            >
              {t("salute")}
            </Box>
            <Box
              textAlign={"initial"}
              component="div"
              fontWeight={500}
              className={` ${classes.myName}`}
            >
              {t("name")}
              <Box className={classes.name}>&nbsp;Fabio Pineda</Box>
            </Box>
            <Box
              textAlign={"initial"}
              component="div"
              fontWeight={300}
              className={classes.secondaryText}
            >
              {t("description1")}
            </Box>
            <Box
              textAlign={"initial"}
              component="div"
              fontWeight={300}
              className={classes.secondaryText}
            >
              <a href="https://github.com/fabioepb" className={classes.link}>
                {t("githubLink")}
              </a>
            </Box>

            <Box
              textAlign={"initial"}
              component="div"
              fontWeight={300}
              className={classes.secondaryText}
            >
              {t("description3")}
            </Box>
            <div className={classes.contactDiv}>
              <Box
                textAlign={"initial"}
                fontWeight={400}
                fontSize={34}
                className={classes.contactText}
              >
                {t("note1")}
              </Box>
              <Button variant="contained" className={classes.contactButton}>
                <Box
                  textAlign={"initial"}
                  fontWeight={400}
                  fontSize={24}
                  onClick={(e) => handleClick(e, "contact")}
                  color="white"
                  // component={"button"}
                >
                  {t("contactMe")}
                </Box>
              </Button>
            </div>
          </Typography>
        </div>
      </Container>
      <ScrollButton />
    </Box>
  );
};

export default LandingHeader;
