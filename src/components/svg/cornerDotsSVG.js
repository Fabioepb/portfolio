import React from "react";
import cornerDotsImage from "../../static/corner-dots-bg.svg";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  cornerDots: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    opacity: 0.05,
    userSelect: "none",
    pointerEvents: "none",
  },
});

const CornerDotsSVG = () => {
  const { classes } = useStyles();
  return (
    <img loading="lazy" src={cornerDotsImage} alt="Corner Dots" className={classes.cornerDots} />
  );
};

export default CornerDotsSVG;
