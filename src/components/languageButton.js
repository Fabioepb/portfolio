import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Fab from '@mui/material/Fab';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  languageButton: {

  },
});

const LanguageButton = () => {
  const { classes } = useStyles();
  const { i18n, t } = useTranslation();
  let [english, setEnglish] = useState(true)

  let changeTongue = () => {
    if (english) {
      i18n.changeLanguage('es')
    } else {
      i18n.changeLanguage('en')
    }
    setEnglish(!english)
  }

  return (
    <div title={t('language')} onClick={changeTongue} className={classes.languageButton} >
      <Fab aria-label="Language" variant='extended' style={{ padding: 0, height: 32, width: 32, minWidth: 32 }}>
        <img alt="language-pick" src={english ? "https://www.shutterstock.com/image-vector/usa-america-set-circular-circle-600nw-2479083185.jpg" : "https://cdn.countryflags.com/thumbs/spain/flag-round-250.png"} height={24} width={24} style={{ borderRadius: "99%" }} />
      </Fab>
    </div>
  )
}

export default LanguageButton