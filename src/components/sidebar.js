import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    container:{
        height: '100%'
    }
})


export default function Sidebar(props){
    let classes= useStyles()
    return(
      <Container className={classes.container}>
        {props.children}
      </Container>
    )
}
