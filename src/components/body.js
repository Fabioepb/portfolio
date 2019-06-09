import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AvatarPic from './avatar';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import {Home, Projects, Contact} from '../views/'
import HomeIcon from './homeicon'
import ProjectsIcon from './projectsicon'
import ContactIcon from './contacticon'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"


const useStyles = makeStyles({
    bodyContainer:{
        height: '100%',
        width:'100%',
        marginTop: 170,
        paddingTop: 15,
        boxShadow: '2px 2px 15px 1px rgba(0,0,0,0.75)',
        marginBottom: '25px'
    },
    footer:{
      marginTop: '10px',
      marginBottom: '10px'
    }
})


export default function Body(props){
    let classes = useStyles()

    return(
      <Router>
      <Container>
        <CssBaseline/>
        <Grid container direction='column' justify='center' alignItems='center'>
          <AvatarPic />
          <Grid container>
            <Paper className={classes.bodyContainer} elevation={4}>
              <Typography component='div'>
                <Box textAlign='center' fontWeight={600} fontSize={36}>
                  Fabio Pineda
                </Box>
                <Box textAlign='center' fontWeight={500} fontSize={24}>
                  Computer Engineer & Software Developer
                </Box>
                <Divider/>
              </Typography>

              <ProjectsIcon fontSize='large' color='secondary'/>
              <HomeIcon fontSize="large" color='secondary'/>

              <ContactIcon fontSize='large' color='secondary'/>

              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects/" component={Projects} />
                <Route path="/contact/" component={Contact} />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
              
              <Divider />
              <Box className={classes.footer} textAlign='center' fontWeight={200} fontSize={18}>
                  Copyright © {new Date().getFullYear()+1} Fabio Pineda. <br/> All rights reserved.
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </Router>
    )
}