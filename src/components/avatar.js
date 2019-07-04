import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar'
import picture from '../static/Fotocara2.jpg'

const useStyles = makeStyles({
    avatar:{
        height: 160,
        width: 150,
        border: '3px solid #f50057',
        position: 'absolute',
        top:25,
        boxShadow: '2px 2px 15px -2px rgba(0,0,0,0.75)',   
    },
    img:{
        transform: 'rotate(-90deg)',
        width: 'unset'
    }
})

export default function AvatarPic(){
    let {avatar,img} = useStyles()
    return(
        <Avatar srcSet={picture} alt="Avatar" className={avatar} classes={{img:img}}/>
    )
}