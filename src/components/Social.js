/* eslint-disable no-useless-computed-key */
import React from "react";
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    mainContainer: {
        color: "black",
        fontSize: "100px"
    },
    item: {
        padding: "1vw",
        color: "black",
        "&:hover": {
            background: "linear-gradient(141deg,rgba(79, 196, 155, 1) 0%, rgba(75, 184, 146, 1) 69%)",
            cursor: "pointer",
            transition: "0.1s",
            filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.25))"
        }
    }
})

const Social = () => {
    const { classes } = useStyles();

    const openLink = (link) => window.open(link, '_blank');

    return (
        <section className={classes.mainContainer}>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item} onClick={() => openLink("https://www.github.com/fabioepb")}>
                    <i className="fab fa-github-square"></i>
                </Grid>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item} onClick={() => openLink("https://www.linkedin.com/in/fabiopineda")}>
                    <i className="fab fa-linkedin"></i>
                </Grid>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item} component="a" href={"mailto:fabiopineda97@gmail.com"}>
                    <i className="fas fa-envelope-square"></i>
                </Grid>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={6} className={classes.item} onClick={() => openLink("https://www.upwork.com/o/profiles/users/~01386605dfaa2467b3/")}>
                    <img src="https://cdn2.iconfinder.com/data/icons/picons-social/57/79-upwork-2-512.png" alt="upwork-logo" width={100} />
                </Grid>
            </Grid>
        </section>
    )
}

export default Social;