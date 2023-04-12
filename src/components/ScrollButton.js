import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";
import { makeStyles } from 'tss-react/mui';
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const useStyles = makeStyles()({
  root: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
  },
  button: {
    color: "#00a3ff",
  },
});

function ScrollTop(props) {
  const { children, window } = props;
  const { classes } = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const ScrollButton = (props) => {
  const classes = useStyles();

  return (
    <ScrollTop {...props}>
      <Fab size="small" aria-label="scroll back to top">
        <ArrowUpwardIcon classes={{ root: classes.button }} />
      </Fab>
    </ScrollTop>
  );
};
export default ScrollButton;
