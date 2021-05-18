import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageButton from './languageButton';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  navLink: {
    marginRight: '20px',
    fontWeight: 700,
    '&:hover': {
      transition: '0.3s',
      color: 'black',
      cursor: 'pointer',
    },
    '@media(max-width: 600px)': {
      fontSize: '14px !important',
      marginRight: '5px',
    },
  },
  scrollednavLink: {
    marginRight: 20,
    fontWeight: 700,
    '&:hover': {
      transition: '0.3s',
      color: 'black',
      cursor: 'pointer',
    },
    '@media(max-width: 600px)': {
      fontSize: '14px !important',
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
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '50%',
    marginLeft: 'auto',
    paddingRight: '2vw',
    // eslint-disable-next-line no-useless-computed-key
    ['@media(max-width: 600px)']: {
      paddingRight: '10vw',
    },
  },
});

const NavBar = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener('scroll', function (e) {
    if (
      (document.documentElement.scrollTop || document.body.scrollTop) >
      window.innerHeight * 0.7
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
        <Toolbar>
          <div className={classes.navDiv}>
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
            <LanguageButton />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
