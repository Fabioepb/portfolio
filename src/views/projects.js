import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ProjectCard from '../components/projectcard'
import Grid from '@material-ui/core/Grid'
import snapit from '../static/snapit.png'
import ionic from '../static/ionic.png'
import Bootstrap from '../static/bootstrap.png'
import reactlogo from '../static/react.png'
import luxlogo from '../static/luxury.jpg'
import Zoom from '@material-ui/core/Zoom'
import useAnimation from '../hooks/useanimation'
import {makeStyles} from '@material-ui/styles'
import { useTranslation } from 'react-i18next';

let useStyles = makeStyles({
  container:{
    marginTop:'20px',
    marginBottom:'20px'
  }
})


export default function Projects() {
  let checked = useAnimation()
  let classes = useStyles()
  const {t} = useTranslation();
  return (
    <Zoom in={checked}>
    <Typography component='div'>
    <Box textalign='center' fontWeight={600} fontSize={32}>
      {t("workProjects")}
    </Box>
    <Divider variant='middle'/>
      <Grid container justify='center' className={classes.container}>
        <Grid item>
          <ProjectCard 
          title='Luxury Mining'
          description="luxTitle"
          released={true}
          website='https://luxurymining.herokuapp.com/'
          tech="luxTech"
          src={luxlogo}
        />
        </Grid>
      </Grid>
    <Box textalign='center' fontWeight={600} fontSize={32}>
      {t("courseProjects")}
    </Box>
    <Divider variant='middle'/>
      <Grid container justify='center' className={classes.container}>
        <Grid item>
          <ProjectCard 
          title='SnapIt'
          description='snapTitle'
          link='https://github.com/Fabioepb/snapit'
          tech="snapTech"
          src={snapit}
        />
        </Grid>
        <Grid item>
          <ProjectCard 
          title='ReactivePad'
          description='reactiveTitle'
          link='https://github.com/Fabioepb/reactive-pad'
          tech="reactiveTech"
          src={reactlogo}
        />
        </Grid>
        <Grid item>
          <ProjectCard 
          title='ShoppingCart'
          description='shoppingTitle'
          link='https://github.com/Fabioepb/Shopping-CartSV'
          tech="shoppingTech"
          src={reactlogo}
        />
        </Grid>
        <Grid item>
        <ProjectCard 
          title='Triplete'
          description='tripleteTitle'
          link='https://github.com/Fabioepb/Triplete-server'
          tech="tripleteTech"
          src={Bootstrap}
        />
        </Grid>
        <Grid item>
          <ProjectCard 
          title='Shared Whiteboard'
          description='whiteboardTitle'
          link='https://github.com/Jnlbr/shared-whiteboard'
          tech="whiteboardTech"
          src={Bootstrap}
        />
        </Grid>
        <Grid item>
          <ProjectCard 
          title='MovieStar'
          description="movieTitle"
          link='https://github.com/Fabioepb/MovieStar'
          src={ionic}
          tech="movieTech"
        />
        </Grid>
      </Grid>
    </Typography>
    </Zoom>
  )
}