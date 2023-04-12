import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Fab from '@mui/material/Fab';

const LanguageButton = () => {
  const { i18n } = useTranslation();
  let [english, setEnglish] = useState(true)

  let changeTongue = (english) => {
    if (english) {
      i18n.changeLanguage('es')
      setEnglish(false)
    } else {
      i18n.changeLanguage('en')
      setEnglish(true)
    }
  }

  return (
    <div style={{ position: 'absolute', right: '15px', top: '15px' }}>
      <Fab aria-label="Language" variant='extended' style={{ padding: 0, height: 32, width: 32, minWidth: 32 }}>
        <img alt="language-pick" onClick={() => changeTongue(english)} src={english ? "https://cdn1.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_United_Kingdom_-_Circle-512.png" : "https://cdn.countryflags.com/thumbs/spain/flag-round-250.png"} height={24} width={24} />
      </Fab>
    </div>
  )
}

export default LanguageButton