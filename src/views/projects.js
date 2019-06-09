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

const luxuryTech= `I was brought in to work as a full stack developer to try and finish the project which had suffered from development problems.\n\n I was in charge of: \n \n* The migration from Bootstrap 3.3.7 to Bootstrap 4.3\n* Doing a minor rework of the whole UI\n* Making the client Mobile responsive\n* Making sure the API was robust and secure.\n* Bug testing the API and client`
const snapitTech = `The tech used in the front end was:\n*React Native\n*Redux for state management\n*Redux thunk for async operations\n and for the back end: \n*NodeJs - ExpressJs\n*MongoDB\n*Multer`
const shoppingTech = `The stack used in the frontend was: \n*Reactjs\n*Material-ui\n and for the backend:\n*NodeJs - ExpressJs\n*Postgresql`
const tripleteTech = `The stack used in the frontend was:\n*Jquery\n*Bootstrap 4\nand for the backend: \n*NodeJs - ExpressJs\n*Postgresql`
const reactiveTech = `The stack used in the frontend was: \n*React Native\n*Redux\n and we used the native Storage to store information.\n No backend was used.`
const whiteboardTech= `The stack used in the frontend was: \n*Bootrstrap 3\n*Socket-io\n and for the backend:\n*Java Servlets.\n no Database was used.`
const movieTech= `The stack used in the frontend was:\n*Ionic 3\n and for the backend we used the IMDB API to fetch movie data.`

let useStyles = makeStyles({
  container:{
    marginTop:'20px',
    marginBottom:'20px'
  }
})


export default function Projects() {
  let checked = useAnimation()
  let classes = useStyles()

  return (
    <Zoom in={checked}>
    <Typography component='div'>
    <Box textalign='center' fontWeight={600} fontSize={32}>
      Work Projects
    </Box>
    <Divider variant='middle'/>
      <Grid container justify='center' className={classes.container}>
        <Grid item>
          <ProjectCard 
          title='Luxury Mining'
          description='Express Web Application for a cloud mining service.'
          released={true}
          website='https://luxurymining.herokuapp.com/'
          tech={luxuryTech}
          src={luxlogo}
        />
        </Grid>
      </Grid>
    <Box textalign='center' fontWeight={600} fontSize={32}>
      Course Projects
    </Box>
    <Divider variant='middle'/>
      <Grid container justify='center' className={classes.container}>
        <Grid item>
          <ProjectCard 
          title='SnapIt'
          description='Instagram copyWork - A social media network that lets you share pictures and comment on them'
          link='https://github.com/Fabioepb/snapit'
          tech={snapitTech}
          src={snapit}
        />
        </Grid>
        <Grid item>
          <ProjectCard 
          title='ReactivePad'
          description='A mobile app that lets you write notes or draw, and save them'
          link='https://github.com/Fabioepb/reactive-pad'
          tech={reactiveTech}
          src={reactlogo}
        />
        </Grid>
        <Grid item>
          <ProjectCard 
          title='ShoppingCart'
          description='Amazon Copywork-An E-commerce web App, that lets you put things into your cart and go to checkout'
          link='https://github.com/Fabioepb/Shopping-CartSV'
          tech={shoppingTech}
          src={reactlogo}
        />
        </Grid>
        <Grid item>
        <ProjectCard 
          title='Triplete'
          description='A betting web app where you bet on soccer matches'
          link='https://github.com/Fabioepb/Triplete-server'
          tech={tripleteTech}
          src={Bootstrap}
        />
        </Grid>
        <Grid item>
          <ProjectCard 
          title='Shared Whiteboard'
          description='A web app that lets you and your friends draw online'
          link='https://github.com/Jnlbr/shared-whiteboard'
          tech={whiteboardTech}
          src={Bootstrap}
        />
        </Grid>
        <Grid item>
          <ProjectCard 
          title='MovieStar'
          description='A mobile app containing information on all your favorite movies'
          link='https://github.com/Fabioepb/MovieStar'
          src={ionic}
          tech={movieTech}
        />
        </Grid>
      </Grid>
    </Typography>
    </Zoom>
  )
}