import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SkillList from './SkillList';

const useStyles = makeStyles()({
  skillSection: {
    paddingTop: "15vh",
    paddingBottom: "15vh",
    "@media(max-width: 1200px)": {
      paddingTop: '20vh'
    },
  },
  skillTitle: {
    backgroundImage: "linear-gradient(180deg, rgba(62,157,239,1) 0%, rgba(0,163,255,1) 45%, rgba(62,193,239,1) 100%);",
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    // eslint-disable-next-line no-useless-computed-key
    "@media(max-width: 600px)": {
      fontSize: "30px"
    },

  },
  skillSummary: {
    marginBottom: "5vh",
    // eslint-disable-next-line no-useless-computed-key
    "@media(max-width: 600px)": {
      fontSize: "20px"
    },
  }
})


export default function SkillSection(props) {
  const { classes } = useStyles()
  const { t } = useTranslation();
  return (
    <Container>
      <CssBaseline />
      <Grid container direction='row' justify='center' alignItems='center' className={classes.skillSection}>
        <Grid item lg={12} md={12}>
          <Box component="h2" textAlign={"center"} fontWeight={700} fontSize={42} className={classes.skillTitle} >
            {t("skills")}
          </Box>
        </Grid>
        <Grid item lg={12} md={12}>
          <Box textAlign={"initial"} fontWeight={300} fontSize={30} className={classes.skillSummary} id="skills">
            {t("note2")}
          </Box>
        </Grid>
        <SkillList />
      </Grid>
    </Container>
  )
}