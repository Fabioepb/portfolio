/* eslint-disable no-useless-computed-key */
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import NavBar from './navBar';
import ScrollButton from './ScrollButton';

const useStyles = makeStyles()({
  landing: {
    height: '97vh',
    width: '60vw',
    padding: '1vh 10vw',
    ['@media(max-width: 1300px)']: {
      padding: '25px',
      width: '100vw',
    },
    ['@media(max-width: 500px)']: {
      padding: 10,
    },
  },
  mainText: {
    paddingTop: '7vh',
    marginTop: 0,
    marginBottom: 0,
    fontSize: '4.5em',
    textShadow: '1px 1px 2px black',
    display: 'flex',
    color: 'white',
    ['@media(max-width: 1300px)']: {
      paddingTop: '2vh',
      fontSize: '3.5em',
    },
    ['@media(max-width: 500px)']: {
      paddingTop: '5vh',
      fontSize: '2.5em',
    },
  },
  secondaryText: {
    width: '40vw',
    color: 'white',
    textAlign: 'justify',
    fontSize: '24px',
    textShadow: '1px 1px 2px black',
    marginBottom: 25,
    ['@media(max-width: 1300px)']: {
      width: '90vw',
      fontSize: '20px',
    },
    ['@media(max-width: 500px)']: {
      width: '90vw',
      fontSize: '18px',
    },
    ['@media(max-width: 360px)']: {
      width: '90vw',
      fontSize: '15px',
    },
  },
  name: {
    color: 'white',
    textShadow: '1px 1px 2px black',
    ['@media(max-width: 500px)']: {
      fontSize: '20px',
    },
    ['@media(max-width: 1300px)']: {
      fontSize: '24px',
    },
    ['@media(max-width: 380px)']: {
      fontSize: '18px',
    },
  },
  contactText: {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    textShadow: '1px 1px 2px black',
    ['@media(max-width: 1000px)']: {
      fontSize: '23px',
    },
    ['@media(max-width: 500px)']: {
      fontSize: '22px',
    },
  },
  contactButton: {
    background:
      'linear-gradient(180deg, rgba(62,157,239,1) 0%, rgba(0,163,255,1) 45%, rgba(62,193,239,1) 100%)',
    color: 'black',
    borderColor: '3px solid black',
    marginTop: 10,
    zIndex: 90,
  },
  myName: {
    fontSize: '2.2em',
    paddingTop: 0,
    ['@media(max-width: 500px)']: {
      fontSize: '20px',
    },
    ['@media(max-width: 1300px)']: {
      fontSize: '24px',
    },
    ['@media(max-width: 380px)']: {
      fontSize: '18px',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    borderBottom: '5px solid rgb(243,243,243)',
    marginLeft: 5,
    '&:hover': {
      transition: '0.3s !important',
      backgroundColor: 'rgb(0,249,250)',
    },
  },
  mainDiv: {
    display: 'flex',
    position: 'absolute',
    top: '0px',
    width: '70%',
    flexDirection: 'row',
    ['@media(max-width: 1300px)']: {
      flexDirection: 'column',
    },
  },
});

const LandingHeader = (props) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const handleClick = (event, target) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${target}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <NavBar />
      <div id='back-to-top-anchor' />
      <Box height='100vh' width='100%'>
        <iframe
          src='https://my.spline.design/librarydeviceclouds-f0baca0b3c5e034a3c5b277175212ec8/'
          width='100%'
          height='100%'
          title='background 3d design'
        ></iframe>
      </Box>
      <div className={classes.mainDiv}>
        <Typography component='div' className={classes.landing}>
          <Box
            textAlign={'initial'}
            component='div'
            fontWeight={700}
            className={classes.mainText}
          >
            {t('salute')}
          </Box>
          <Box
            textAlign={'initial'}
            component='div'
            fontWeight={500}
            className={`${classes.mainText} ${classes.myName}`}
          >
            {t('name')}
            <Box className={classes.name}>&nbsp;Fabio Pineda</Box>
          </Box>
          <Box
            textAlign={'initial'}
            component='div'
            fontWeight={300}
            className={classes.secondaryText}
          >
            {t('description1')}
            <a href='https://github.com/fabioepb' className={classes.link}>
              GitHub.
            </a>
          </Box>
          <Box
            textAlign={'initial'}
            component='div'
            fontWeight={300}
            className={classes.secondaryText}
          >
            {t('description2')}
          </Box>
          <Box
            textAlign={'initial'}
            component='div'
            fontWeight={300}
            className={classes.secondaryText}
          >
            {t('description3')}
          </Box>
          <div className={classes.contactDiv}>
            <Box
              textAlign={'initial'}
              fontWeight={400}
              fontSize={34}
              className={classes.contactText}
            >
              {t('note1')}
            </Box>
            <Button variant='contained' className={classes.contactButton}>
              <Box
                textAlign={'initial'}
                fontWeight={400}
                fontSize={24}
                onClick={(e) => handleClick(e, 'contact')}
                color='white'
              >
                {t('contactMe')}
              </Box>
            </Button>
          </div>
        </Typography>
      </div>
      <ScrollButton />
    </>
  );
};

export default LandingHeader;
