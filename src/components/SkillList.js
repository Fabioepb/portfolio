import React from "react"
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    skill: {
        padding: "5px",
        marginTop: "50px",
        borderLeft: "2px solid #3e9def",
        // eslint-disable-next-line no-useless-computed-key
        ["@media(max-width: 500px)"]: {
            fontSize: "20px"
        }
    }
})

const SkillList = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    Javascript (ES6+)
                </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill} >
                    React
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    HTML5
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    CSS3
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    SCSS
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    Nodejs
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    Expressjs
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    PostgreSQL
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    MongoDB
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    Jest
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    React Native
          </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    TypeScript
        </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    ORM
        </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    Responsive Design
        </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    Travis CI/CD
                </Box>
            </Grid>
            <Grid item lg={3} md={3} xs={6} sm={6}>
                <Box textAlign={"initial"} fontWeight={400} fontSize={30} className={classes.skill}>
                    Ionic 3
        </Box>
            </Grid>

        </>
    )
}

export default SkillList