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
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  defaultText:{
    whiteSpace: "pre-wrap",
    wordBreak: 'break-word',
    width: '70%',
    margin: 'auto',
    textAlign:'Justify',
    marginTop: '15px',
    marginBottom: '15px',

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
  const { t} = useTranslation();
  return (
    <Zoom in={checked}>
    <div>
      <Typography component='div'>

        <Box textAlign='center' fontWeight={600} fontSize={32}>
          {t("aboutMe")}
        </Box>

        <Divider variant='middle'/>

        <Box className={classes.defaultText} fontWeight={500} fontSize={22}>
          {t("summary")}
          </Box>

        <Box textAlign='center' fontWeight={600} fontSize={32}>
          {t("skills")}
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
            {t("otherSkills")}
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