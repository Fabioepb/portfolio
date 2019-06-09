import React from 'react'
import {makeStyles} from '@material-ui/styles'

let useStyles = makeStyles({
    icon:{
        height: 24,
        width: 24,
        marginRight: 5
    }
})

export default  function TechIcon(props){
    let classes = useStyles()

    return(
        <img className={classes.icon} alt='' {...props}/>
    )
}