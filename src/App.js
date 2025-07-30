import React from "react";
import SkillSection from "./components/SkillSection";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "tss-react/mui";
import clsx from "clsx";
import "./App.css";
import LandingHeader from "./components/landingHeader";
import KeystoneProject from "./components/projects/KeystoneProject";
import BitesProject from "./components/projects/bitesProject";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";
import DonorkitProject from "./components/projects/DonorkitProject";
import FantasyProject from "./components/projects/FantasyProject";
import AddirktiveProject from "./components/projects/addirktiveProject";
import QatarQuinielaProject from "./components/projects/QatarQuinielaProject";
import CircuitProject from "./components/projects/circuitProject";
import { Box } from "@mui/material";
import WavesSVG from "./components/svg/wavesSVG";
import DotsCircleSVG from "./components/svg/dotsCircleSVG";
import WavesDotsSVG from "./components/svg/wavesDotsSVG";

const useStyles = makeStyles()({
  container: {
    height: "100%",
    maxWidth: "100%",
    padding: 0,
  },
  projectsContainer: {
    position: "relative",
    overflow: "hidden",
  },
  gradientBg: {
    background: "#3ea7ed",
    background:
      "linear-gradient(322deg, rgba(62, 167, 237, 1) 0%, rgba(88, 209, 181, 1) 93%)",
  },
});

function App() {
  const { classes } = useStyles();

  return (
    <div id="container" className="App">
      <CssBaseline />
      <LandingHeader />
      {/* <Container className={classes.container}> */}
      <SkillSection />
      <Box className={classes.projectsContainer}>
        <WavesDotsSVG />
        <CircuitProject />
      </Box>
      <AddirktiveProject />
      <QatarQuinielaProject />
      <Box className={classes.projectsContainer}>
        <DonorkitProject />
        <DotsCircleSVG />
      </Box>
      <Box className={clsx(classes.projectsContainer, classes.gradientBg)}>
        <FantasyProject />
        <WavesSVG />
        <KeystoneProject />
      </Box>
      <Box className={classes.projectsContainer}>
      <DotsCircleSVG />

      <BitesProject />
      </Box>
      <Contact />
      <Social />
      <Footer />
      {/* </Container> */}
    </div>
  );
}

export default App;
