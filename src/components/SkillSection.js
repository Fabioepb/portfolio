import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SkillList from './SkillList';

const useStyles = makeStyles({
  skillSection: {
    paddingTop: "15vh",
    paddingBottom: "15vh",
  },
  skillTitle: {
    marginBottom: "5vh",
    color: "#3e9def",
    // eslint-disable-next-line no-useless-computed-key
    ["@media(max-width: 600px)"]: {
      fontSize: "30px"
    }
  },
  skillSummary: {
    marginBottom: "5vh",
    // eslint-disable-next-line no-useless-computed-key
    ["@media(max-width: 600px)"]: {
      fontSize: "20px"
    },
  }
})


export default function SkillSection(props) {
  let classes = useStyles()
  const { t } = useTranslation();
  return (
    <Container>
      <CssBaseline />

      {
        // Section with skills
      }
      <Grid container direction='row' justify='center' alignItems='center' className={classes.skillSection}>
        <Grid item lg={12} md={12}>
          <Box textAlign={"center"} fontWeight={700} fontSize={42} className={classes.skillTitle} >
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