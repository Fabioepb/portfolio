import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import useWidth from '../hooks/usewidth'
const useStyles = makeStyles({
  button:{
    flexDirection:'column',
    width: '90px'
  }
})

export default function ContactIcon(props) {
  let classes = useStyles()
  let width = useWidth()
  return (
    <IconButton className={classes.button}>
      <Link to="/contact">
        <Grid container direction='column' justify='center' alignItems='center'>
          <SvgIcon {...props}>
            <path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zM21 6h-7v5h7V6zm-1 2l-2.5 1.75L15 8V7l2.5 1.75L20 7v1zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z" />
          </SvgIcon>
          {(width >= 350) ? (
            <Typography component='div'>
              <Box textalign='center' fontSize={10}>
                Contact
              </Box>
            </Typography>
          ) : ('')}
        </Grid>
      </Link>
    </IconButton>
  );
  }

  