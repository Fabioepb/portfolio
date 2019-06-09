import React,{useState, useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles'
import TechIcon from '../components/techicon'

const useStyle = makeStyles({
  container :{
     maxWidth: '60em',
     margin: '0 auto',
  },
  progressSegment: {
    display: 'flex',
    marginBottom: '2em'
  },

  item: {
    width: '100%',
    backgroundColor: 'lightgray',
    marginRight: '4px',
    height: '12px',
  },
  active:{
    backgroundColor: '#f50057'
  }
})

export default function ProgressBar(props) {
  let [amount] = useState(props.amount)
  let [elements,setElements] = useState([])
  let classes = useStyle()

  useEffect(()=>{
    let elements = []
    for (let index = 0; index < 5; index++) {
      if(index < amount){
        elements.push(<div key={index} className={`${classes.item} ${classes.active}`}/>)
      }else{
        elements.push(<div key={index} className={`${classes.item}`}/>)
      }
    }
    setElements(elements)

  },[amount,classes.item,classes.active])

  return (
    <Typography component='div' className={classes.container}>
      <Box textAlign='left' fontWeight={600} fontSize={26}>
      <TechIcon src={props.src} />
      {props.label}
      </Box>
    <div className={classes.progressSegment}>
      {elements}
    </div>
    </Typography>
  )
}