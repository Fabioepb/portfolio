import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import SvgIcon from '@material-ui/core/SvgIcon';
import Divider from '@material-ui/core/Divider'
import earth from '../static/earth.svg'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: '5px',
    minheight: 350
  },
  media: {
    height: 120,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  description:{
    height: '50px',
    color:'#f50057'
  },
  paragraphs:{
    margin: '0',
    textAlign: 'left',
    fontWeight: '500',
    lineHeight: 'initial'
  }
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} elevation={5}>
      <CardMedia
        className={classes.media}
        image={props.src}
        title={props.title}

      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p" fontWeight={200} className={classes.description}>
          {t(props.description)}
        </Typography>
      </CardContent>
      <Divider/>
      <CardActions disableSpacing>
        {(props.link)?(
          <IconButton onClick={() => { window.open(props.link, '_blank') }}>
            <SvgIcon >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
            </SvgIcon>
          </IconButton>
        ):(<React.Fragment/>)}
        {(props.released)?(
          <IconButton onClick={() => { window.open(props.website, '_blank') }}>
              <img src={earth} alt='Website' title='Website' height='25px'/>
          </IconButton>
        ):(<React.Fragment/>)}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <SvgIcon >
            <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' />
          </SvgIcon>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider variant='middle'/>
        <CardContent>
          <Typography component='div' style={{whiteSpace: "pre-wrap", textAlign: 'left'}}>
            {t(props.tech)}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
