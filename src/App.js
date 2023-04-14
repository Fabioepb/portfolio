import React from 'react';
import SkillSection from './components/SkillSection';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
import './App.css';
import LandingHeader from './components/landingHeader';
import KeystoneProject from './components/KeystoneProject';
import LuxminingProject from './components/LuxminingProject';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';
import DonorkitProject from './components/DonorkitProject';
import FantasyProject from './components/FantasyProject';
import AddirktiveProject from './components/addirktiveProject';
import QatarQuinielaProject from './components/QatarQuinielaProject';

const useStyles = makeStyles()({
  container: {
    height: '100%',
    maxWidth: '100%',
    padding: 0,
  },
});

function App() {
  const { classes } = useStyles();

  return (
    <div id='container' className='App'>
      <CssBaseline />
      <LandingHeader />
      {/* <Container className={classes.container}> */}
      <SkillSection />
      <AddirktiveProject />
      <QatarQuinielaProject />
      <DonorkitProject />
      <FantasyProject />
      <KeystoneProject />
      <LuxminingProject />
      <Contact />
      <Social />
      <Footer />
      {/* </Container> */}
    </div>
  );
}

export default App;