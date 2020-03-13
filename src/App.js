import React from 'react';
import SkillSection from './components/SkillSection'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core';
import "./App.css"
import LandingHeader from "./components/landingHeader"
import KeystoneProject from './components/KeystoneProject';
import LuxminingProject from './components/LuxminingProject';
import Contact from './components/Contact';
import Social from "./components/Social";
import Footer from './components/Footer';

const useStyles = makeStyles({
  container:{
    height:'100%',
    maxWidth: "100%",
    padding:0
  }
})

function App() {
  let classes = useStyles()

  return (
    <div className="App">
      <CssBaseline/>
      <LandingHeader />
      <Container className={classes.container} >
          <SkillSection />
          <KeystoneProject/>
          <LuxminingProject/>
          <Contact/>
          <Social/>
          <Footer/>
      </Container>
    </div>
  );
}

export default App;
