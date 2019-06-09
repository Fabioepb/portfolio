import React from 'react'
import '../App.css';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Zoom from '@material-ui/core/Zoom'
import useAnimation from '../hooks/useanimation'
export default function DevNote(props) {
  let checked = useAnimation()

  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
      <Paper elevation={4}>
        <Typography component='div' >
          <Box fontWeight={600}>
            Dev Notes..
        </Box>
          <Divider variant='middle' />
          {props.children}
        </Typography>
      </Paper>
    </Zoom>
  )
}



