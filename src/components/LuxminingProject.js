/* eslint-disable no-useless-computed-key */
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    paddingTop: '10vh',
    paddingBottom: '10vh',
    paddingLeft: '5vw',
    color: 'black',
  },
  projectsTitle: {
    marginBottom: '5vh',
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
    ['@media(max-width: 600px)']: {
      fontSize: '30px',
    },
    ['@media(max-width: 1000px)']: {
      textAlign: 'center',
    },
  },
  keystoneInfo: {
    paddingLeft: '10vw',
    ['@media(max-width: 600px)']: {
      fontSize: '20px',
    },
    ['@media(max-width: 1000px)']: {
      paddingLeft: 0,
    },
  },
  Image: {
    width: '600px',
    '@media(max-width: 900px)': {
      width: '400px',
    },
    '@media(max-width: 400px)': {
      width: '300px',
    },
  },
  note: {
    '@media(max-width: 600px)': {
      fontSize: '20px',
    },
    '@media(max-width: 1000px)': {
      paddingRight: '5vw',
    },
  },
});

const LuxminingProject = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.mainContainer}>
      <Box
        textAlign={'center'}
        fontWeight={700}
        fontSize={42}
        className={classes.title}
      >
        Luxury Mining
      </Box>
      <Container>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item lg={6} md={6} className={classes.keystoneInfo}>
            <Box
              textAlign={'justify'}
              fontWeight={300}
              fontSize={30}
              className={classes.note}
            >
              {t('luxNote')}
            </Box>
          </Grid>
          <Grid item lg={6} md={6}>
            <img
              alt='keystone-app'
              src='https://i.imgur.com/NEKBleL.png'
              className={classes.Image}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LuxminingProject;
