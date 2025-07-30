/* eslint-disable no-useless-computed-key */
import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  mainContainer: {
    color: "black",
    fontSize: "100px",
  },
  item: {
    color: "black",
  },
  link: {
    padding: "40px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
    // pointerEvents: "none",
    "&:hover": {
      background:
        "linear-gradient(141deg,rgba(79, 196, 155, 1) 0%, rgba(75, 184, 146, 1) 69%)",
      transition: "0.1s",
      filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.25))",
    },
  },
});

const Social = () => {
  const { classes } = useStyles();

  const openLink = (link) => window.open(link, "_blank");

  return (
    <section className={classes.mainContainer}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item}>
          <a
            className={classes.link}
            href="https://www.github.com/fabioepb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-2253/25/Group-128.png"
              alt="github-logo"
              width={100}
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          </a>
        </Grid>
        <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item}>
          <a
            className={classes.link}
            href="https://www.linkedin.com/in/fabiopineda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png"
              alt="linkedin-logo"
              width={100}
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          </a>
        </Grid>
        <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item}>
          <a
            className={classes.link}
            href={"mailto:fabiopineda97@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/user-interface-outline-27/24/25.email_mail_envelope_interface_ui-128.png"
              alt="mail-logo"
              width={100}
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          </a>
        </Grid>
        <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item}>
          <a
            className={classes.link}
            href="https://www.upwork.com/o/profiles/users/~01386605dfaa2467b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/picons-social/57/79-upwork-2-128.png"
              alt="upwork-logo"
              width={100}
            />
          </a>
        </Grid>
      </Grid>
    </section>
  );
};

export default Social;
