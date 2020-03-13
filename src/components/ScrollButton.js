import React from "react"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
    root:{
        position:"fixed",
        bottom:"25px",
        right:"25px"
    }
})

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = event => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

  const ScrollButton = (props) =>{
      return(
        <ScrollTop {...props}>
            <Fab  size="small" aria-label="scroll back to top">
          <img src="https://cdn3.iconfinder.com/data/icons/arrows-85/24/Arrow-1-512.png" alt="arrow-up" width={24}/>
        </Fab>
      </ScrollTop>
      )
  }
  export default ScrollButton