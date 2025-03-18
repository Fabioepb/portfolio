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
        <img alt="language-pick" src={english ? "https://cdn1.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_United_Kingdom_-_Circle-512.png" : "https://cdn.countryflags.com/thumbs/spain/flag-round-250.png"} height={24} width={24} />
      </Fab>
    </div>
  )
}

export default LanguageButton