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

export default function ProjectsIcon(props) {
  let classes = useStyles()
  let width = useWidth()
  return (
    <IconButton className={classes.button}>
      <Link to="/projects/">
        <Grid container direction='column' justify='center' alignItems='center'>
          <SvgIcon {...props}>
            <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" />
          </SvgIcon>
          {(width >= 350) ? (
            <Typography component='div'>
              <Box textalign='center' fontSize={10}>
                Projects
              </Box>
            </Typography>
          ) : ('')}
        </Grid>
      </Link>
    </IconButton>
  );
  }
  
  
  