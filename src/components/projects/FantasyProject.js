/* eslint-disable no-useless-computed-key */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';

const useStyles = makeStyles()({
  mainContainer: {
    paddingTop: '10vh',
    paddingBottom: '20vh',
    paddingLeft: '5vw',
    color: 'white',
    zIndex: 150,
    position: "relative",
  },
  projectsTitle: {
    marginBottom: '5vh',
    position: "relative",
    textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    ['@media(max-width: 600px)']: {
      fontSize: '30px',
    },
  },
  projectsSummary: {
    marginBottom: '5vh',
    ['@media(max-width: 600px)']: {
      fontSize: '20px',
    },
  },
  title: {
    marginBottom: '5vh',
    position: "relative",
    textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    ['@media(max-width: 600px)']: {
      fontSize: '30px',
    },
    ['@media(max-width: 1000px)']: {
      textAlign: 'center',
    },
  },
  fantasyInfo: {
    paddingLeft: '10vw',
    position: "relative",
    zIndex: 150,
    ['@media(max-width: 600px)']: {
      fontSize: '20px',
    },
    ['@media(max-width: 1000px)']: {
      paddingLeft: 0,
    },
  },
  Image: {
    width: '600px',
    userSelect: "none",
    pointerEvents: "none",
    '@media(max-width: 900px)': {
      width: '400px',
    },
    '@media(max-width: 400px)': {
      width: '300px',
    },
  },
  quinielaNote: {
    ['@media(max-width: 600px)']: {
      fontSize: '20px',
    },
    ['@media(max-width: 1000px)']: {
      paddingRight: '5vw',
    },
  },
});

const FantasyProject = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.mainContainer}>
      <Container>
        <Box
          textAlign={'center'}
          fontWeight={700}
          fontSize={46}
          className={classes.title}
        >
          FMS Fantasy
        </Box>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item lg={6} md={6}>
            <img
              alt='fantasy-app'
              src='https://i.imgur.com/cxmsmdV.png'
              className={classes.Image}
              loading="lazy"
              style={{ maxWidth: '80vw', zIndex: 150 }}
            />
          </Grid>
          <Grid item lg={6} md={6} className={classes.fantasyInfo}>
            <Box
              textAlign={'left'}
              fontWeight={300}
              fontSize={30}
              className={classes.donorkitNote}
              style={{ maxWidth: '80vw' }}
            >
              {t('fantasyNote')}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FantasyProject;
