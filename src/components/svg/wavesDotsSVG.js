import React from "react";
import wavesDotsImage from "../../static/waves-dots-bg.svg";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  cornerDots: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 100,
    opacity: 0.03,
    userSelect: "none",
    pointerEvents: "none",
    backgroundSize: "contain",
    backgroundPosition: "center",
    overflow: "hidden",
  },
});

const WavesDotsSVG = () => {
  const { classes } = useStyles();
  return (
    <img src={wavesDotsImage} alt="Waves Dots" className={classes.cornerDots} />
  );
};

export default WavesDotsSVG;
