import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LanguageButton from './languageButton';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const useStyles = makeStyles()({
  navLink: {
    marginRight: '20px',
    fontWeight: 700,
    '&:hover': {
      transition: '0.1s',
      textShadow: '1px 1px 5px black',
      fontSize: 21,
      cursor: 'pointer',
    },
    '@media(max-width: 600px)': {
      fontSize: '18px !important',
      marginRight: '5px',
    },
    "@media(min-width: 600px)":{
      marginRight: '20px',
    }
  },
  scrollednavLink: {
    marginRight: 20,
    fontWeight: 700,
    '&:hover': {
      transition: '0.3s',
      textShadow: '1px 1px 5px black',
      cursor: 'pointer',
    },
    '@media(max-width: 600px)': {
      fontSize: '18px !important',
      padding: 5,
      marginRight: 5,
    },
  },
  navBar: {
    backgroundColor: '#3e9def00',
    boxShadow: 'none',
  },
  scrolledNavbar: {
    transition: '0.3s',
    backgroundColor: 'rgba(0,163,255,1)',
  },
  navDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ['@media(max-width: 600px)']: {
      textAlign: 'left'
    },
  },
  navigationLinks:{
    display: "flex",
  },
  toolbar:{
    padding: "0px !important",
  }
});

const NavBar = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener('scroll', function (e) {
    if (
      (document.documentElement.scrollTop || document.body.scrollTop) >
      window.innerHeight * 0.01
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

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
      <AppBar
        className={!scrolled ? classes.navBar : classes.scrolledNavbar}
        id='nav'
      >
        <Container>
        <Toolbar className={classes.toolbar}>
          <div className={classes.navDiv}>
            <div className={classes.navigationLinks}>
            <Typography
              className={scrolled ? classes.scrollednavLink : classes.navLink}
              variant='h6'
              target='contact'
              onClick={(e) => handleClick(e, 'contact')}
            >
              {t('contact')}
            </Typography>
            <Typography
              className={scrolled ? classes.scrollednavLink : classes.navLink}
              variant='h6'
              target='projects'
              onClick={(e) => handleClick(e, 'projects')}
            >
              {t('courseProjects')}
            </Typography>
            <Typography
              className={scrolled ? classes.scrollednavLink : classes.navLink}
              variant='h6'
              target='skills'
              onClick={(e) => handleClick(e, 'skills')}
            >
              {t('skills')}
            </Typography>
            </div>
            <LanguageButton />
          </div>
        </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
