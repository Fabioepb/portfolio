import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/styles';
import SvgIcon from '@material-ui/core/SvgIcon'
import Zoom from '@material-ui/core/Zoom'
import useAnimation from '../hooks/useanimation'
import { useTranslation } from 'react-i18next';

const useStyle = makeStyles({
  container:{
    flexWrap: 'nowrap',
    marginBottom: '15px',
    marginTop: '15px'
  },
  contactDiv:{
    width: '50%',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    wordBreak:'break-word'
  },
  Icon:{
    marginRight: '5px'
  }
})

export default function Contact() {
  let classes = useStyle()
  let checked = useAnimation()
  const { t} = useTranslation();
  return (
    <Zoom in={checked}>
    <Typography component='div'>
      <Box textalign='center' fontWeight={600} fontSize={32}>
        {t("contactMe")}
      </Box>
      <Divider variant='middle'/>
      <Grid container direction='row' className={classes.container} justify='center'>
        <div className={classes.contactDiv}>
        <Grid item xs={6}>
          <Box fontWeight={400} fontSize={22} marginBottom={2}>
            <SvgIcon className={classes.Icon}>
              <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
            </SvgIcon>
            Email <br />
            <a href="mailto:Fabiopineda97@gmail.com">
            <Box fontSize={18}>
              Fabiopineda97@gmail.com
            </Box>
            </a> 
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box fontWeight={400} fontSize={22}>
          <SvgIcon className={classes.Icon}>
              <path d='M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548 2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z'/>
            </SvgIcon>
            Upwork <br />
            <a href='https://www.upwork.com/o/profiles/users/_~01386605dfaa2467b3/' target='_blank' rel='noopener noreferrer'>Fabiopineda97</a>
          </Box>
        </Grid>
        </div>
        <div className={classes.contactDiv}>
        <Grid item xs={6}>
          <Box fontWeight={400} fontSize={22}  marginBottom={2}>
          <SvgIcon className={classes.Icon}>
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
            </SvgIcon>
            LinkedIn <br />
            <a href='https://www.linkedin.com/in/fabio-pineda-5861b8177' target='_blank' rel='noopener noreferrer'>Fabio Pineda</a>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box fontWeight={400} fontSize={22}>
          <SvgIcon className={classes.Icon}>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
          </SvgIcon>
            Github <br />
            <a href='https://github.com/fabioepb' target='_blank' rel='noopener noreferrer'>Fabioepb</a>
          </Box>
        </Grid>
        </div>
      </Grid>
    </Typography>
    </Zoom>
  )
}