import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/styles'
import ProgressBar from '../components/progressbar'
import Javascript from '../static/js.png'
import ReactI from '../static/Reacti.png'
import NodeI from '../static/node.png'
import Responsive from '../static/responsive.png'
import IonicI from '../static/ionici.png'
import Grid from '@material-ui/core/Grid'
import Redux from '../static/redux.png'
import MongoDB from '../static/mongodb.jpg'
import materialui from '../static/materialui.png'
import HTML5 from '../static/HTML5+CSS3.png'
import Bootstrap from '../static/bootstrap.png'
import useAnimation from '../hooks/useanimation'
import Zoom from '@material-ui/core/Zoom'

const useStyles = makeStyles({
  defaultText:{
    wordBreak: 'break-word',
    width: '70%',
    margin: 'auto',
    textAlign:'Justify',
    marginTop: '15px',
    marginBottom: '15px'
  },
  ProgressBar:{
    marginRight: '25px',
    marginLeft: '25px',
    paddingBottom: '15px',
    paddingTop: '15px'
  },
  techContainer:{
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop:'15px'
  }
})

export default function Home() {
  let classes = useStyles()
  let checked = useAnimation()

  return (
    <Zoom in={checked}>
    <div>
      <Typography component='div'>

        <Box textAlign='center' fontWeight={600} fontSize={32}>
          About Me
        </Box>

        <Divider variant='middle'/>

        <Box className={classes.defaultText} fontWeight={500} fontSize={22}>
          I'm a 21 years old Computer engineer, I graduated from Rafael Urdaneta University in May of 2019.<br/> <br/>
          I specialize in Web development from Static web sites to Progressive Web Apps, utilizing latest popular tools like React and NodeJS, and I love seeing a project start and grow into a deployed product that people can enjoy.<br/> <br/>
          I've also developed multiple mobile applications targeted to Android devices, that were compatible with any modern or outdated devices thanks to my focus on responsive design, accesibility and perfomance.
        </Box>

        <Box textAlign='center' fontWeight={600} fontSize={32}>
          Skills
        </Box>

        <Divider variant='middle'/>

        <div className={classes.ProgressBar}>

          <ProgressBar label='Javascript' src={Javascript} amount={5}/>
          <ProgressBar label='ReactJS' src={ReactI} amount={5}/>
          <ProgressBar label='Responsive/Mobile first Design' src={Responsive} amount={5}/>
          <ProgressBar label='React Native'  src={ReactI} amount={4}/>
          <ProgressBar label='Ionic' src={IonicI} amount={4}/>
          <ProgressBar label='NodeJs - ExpressJs' src={NodeI} amount={3}/>

          <Box textAlign='center' fontWeight={400} fontSize={22}>
            And others like basic scripting with Python, Object Oriented Programming, Branding, UX/UI focus.
            <Grid container className={classes.techContainer} justify='space-around'>
              <Grid item>
                <img alt='' height={100} width={240} src={Redux}  />
              </Grid>
              <Grid item>
                <img alt='' height={75} width={240} src={MongoDB}  />
              </Grid>
              <Grid item>
                <img alt='' height={100} width={270} src={HTML5}  />
              </Grid>
              <Grid item>
                <img alt='' height={110} width={230} src={materialui}  />
              </Grid>
              <Grid item>
                <img alt='' height={110} width={230} src={Bootstrap}  />
              </Grid>
            </Grid>

          </Box>
        </div>

      </Typography>
      </div>
      </Zoom>
  )
}