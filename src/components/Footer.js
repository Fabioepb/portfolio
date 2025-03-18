/* eslint-disable no-useless-computed-key */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles()({
  mainContainer: {
    paddingTop: "1vh",
    paddingBottom: "1vh",
    color: "white",
    background:
      "linear-gradient(180deg, rgba(62,157,239,1) 0%, rgba(0,163,255,1) 100%);",
    fontSize: "12px",
  },
  footerText: {
    display: "flex",
    flexDirection: "row",
  },
  copyrightText: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "10px",
    color:"white"
  },
  iconBase: {
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingTop: "3px",
  },
  heartIcon: {
    color: "red",
  },
  coffeeIcon: {
    color: "#c3c3c3",
  },
});

const Footer = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.mainContainer}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item lg={12} md={12}>
          <Box
            textAlign={"center"}
            fontWeight={500}
            fontSize={14}
            className={classes.footerText}
          >
            {t("footerText1")}
            <i
              className={`fas fa-heart ${classes.iconBase} ${classes.heartIcon}`}
            />
            &
            <i
              className={`fas fa-coffee ${classes.iconBase} ${classes.coffeeIcon}`}
            />
            {t("footerText2")}
          </Box>
        </Grid>
        <Grid item lg={12} md={12}>
          <Box
            textAlign={"center"}
            fontWeight={500}
            fontSize={14}
            className={classes.copyrightText}
          >
            {t("copyright")}
            <br />
            {t("copyright2")}
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Footer;
