/* eslint-disable no-useless-computed-key */
import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    mainContainer: {
        color: "black",
        fontSize: "100px"
    },
    item: {
        padding: "1vw",
        color:"black",
        "&:hover":{
            transition:"0.2s",
            boxShadow: "inset 0px 0px 300px 1px rgba(62,156,239,1);",
            cursor:"pointer"
        }
    }
})

const Social = () => {
    const classes = useStyles();

    const openLink = (link) => window.open(link, '_blank');

    return (
        <section className={classes.mainContainer}>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item} onClick={()=>openLink("https://www.github.com/fabioepb")}>
                    <i className="fab fa-github-square"></i>
                </Grid>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item} onClick={()=>openLink("https://www.linkedin.com/in/fabiopineda")}>
                    <i className="fab fa-linkedin"></i>
                </Grid>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item} component="a" href={"mailto:fabiopineda97@gmail.com"}>
                    <i className="fas fa-envelope-square"></i>
                </Grid>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item} onClick={()=>openLink("https://www.upwork.com/o/profiles/users/~01386605dfaa2467b3/")}>
                    <img src="https://cdn2.iconfinder.com/data/icons/picons-social/57/79-upwork-2-512.png" alt="upwork-logo" width={100} />
                </Grid>
            </Grid>
        </section>
    )
}

export default Social;