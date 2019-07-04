import React from 'react';
import Sidebar from './components/sidebar'
import Body from './components/body'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import useWidth from './hooks/usewidth'
import Box from '@material-ui/core/Box'
import logo from './static/logo.svg'
import Responsive from './static/responsive.png'
import DevNote from './components/devnote'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  container:{
    minHeight: window.innerHeight,
    height:'100%', 
  }, 
  mainNote:{
    marginTop: window.innerHeight*0.20
  },
  secondNote:{
    marginTop: window.innerHeight*0.5
  },
  notesText:{
    margin: '6%',
    textAlign:'justify'
  }
})

function App() {
  let classes = useStyles()
  let width = useWidth()
  const { t} = useTranslation();
  return (
    <div className="App">
      <CssBaseline/>
      <Grid container className={classes.container} >
        {(width>=1283)?(    
          <Grid item lg={2} className={classes.mainNote}>
            <Sidebar>
              <DevNote>
                  <Box fontWeight={500} className={classes.notesText}>
                    {t('note1')}
                  </Box>
                  <Box fontWeight={600}>
                    Hooks!
                  </Box>
                  <img src={logo} className="App-logo" alt="logo" />
              </DevNote>
            </Sidebar>
          </Grid>

        ) : ('')}
        <Grid item md={12} sm={12} xs={12} lg={8} xl={8}>
          <Body />
        </Grid>
        {(width >= 1283) ? (
          <Grid item lg={2} className={classes.secondNote}>
            <Sidebar>
              <DevNote >
                <Box fontWeight={500} className={classes.notesText}>
                  {t('note2')}
                </Box>
                <img src={Responsive} height={75} alt="logo" />
              </DevNote>
            </Sidebar>
          </Grid>) : ('')}
      </Grid>
    </div>
  );
}

export default App;
