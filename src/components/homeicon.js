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

export default function HomeIcon(props) {
  let classes = useStyles()
  let width = useWidth()
  return (
    <IconButton className={classes.button}>
      <Link to="/">
        <Grid container direction='column' justify='center' alignItems='center'>
          <SvgIcon {...props} height={50}>
            
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
          </SvgIcon>
          {(width >= 350) ? (
            <Typography component='div'>
              <Box textalign='center' fontSize={10}>
                Home
              </Box>
            </Typography>
          ) : ('')}
        </Grid>
      </Link>
    </IconButton>
  );
}