import React from "react";
import wavesImage from "../../static/waves.svg";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  waves: {
    width: "100%",
    height: "100%",
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

const WavesSVG = () => {
  const { classes } = useStyles();
  return (
    <img loading="lazy" src={wavesImage} alt="Waves" className={classes.waves} />
  );
};

export default WavesSVG;
