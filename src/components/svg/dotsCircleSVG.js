import React from "react";
import dotsCircleImage from "../../static/dots-circle-bg.svg";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  cornerDots: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 100,
    opacity: 0.05,
    userSelect: "none",
    pointerEvents: "none",
    backgroundSize: "cover",
    overflow: "hidden",
    "@media(max-width: 600px)": {
      width: "100%",
      height: "100%",
    },
  },
});

const DotsCircleSVG = () => {
  const { classes } = useStyles();
  return (
    <img src={dotsCircleImage} alt="Dots Circle" className={classes.cornerDots} />
  );
};

export default DotsCircleSVG;
