/* eslint-disable no-useless-computed-key */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';

const useStyles = makeStyles()({
    mainContainer: {
        paddingTop: '10vh',
        paddingBottom: '20vh',
        paddingLeft: '5vw',
        color: 'white',
        background: "linear-gradient(324deg, rgba(62, 167, 237, 1) 0%, rgba(88, 209, 181, 1) 93%)",
    },
    projectsTitle: {
        marginBottom: '5vh',
        ['@media(max-width: 600px)']: {
            fontSize: '30px',
        },
    },
    projectsSummary: {
        marginBottom: '5vh',
        ['@media(max-width: 600px)']: {
            fontSize: '20px',
        },
    },
    title: {
        marginBottom: '5vh',
        position: "relative",
        textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        ['@media(max-width: 600px)']: {
            fontSize: '30px',
        },
        ['@media(max-width: 1000px)']: {
            textAlign: 'center',
        },
    },
    quinielaInfo: {
        position: "relative",
        zIndex: 150,
        paddingLeft: '10vw',
        ['@media(max-width: 600px)']: {
            fontSize: '20px',
        },
        ['@media(max-width: 1000px)']: {
            paddingLeft: 0,
        },
    },
    Image: {
        width: '600px',
        userSelect: "none",
        pointerEvents: "none",
        '@media(max-width: 900px)': {
            width: '400px',
        },
        '@media(max-width: 400px)': {
            width: '300px',
        },
    },
    quinielaNote: {
        ['@media(max-width: 600px)']: {
            fontSize: '20px',
        },
        ['@media(max-width: 1000px)']: {
            paddingRight: '5vw',
        },
    },
});

const QatarQuinielaProject = () => {
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <section className={classes.mainContainer}>
            <Container>
                <Box
                    textAlign={'center'}
                    fontWeight={700}
                    fontSize={46}
                    className={classes.title}
                >
                    Qatar Quiniela
                </Box>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item lg={6} md={6}>
                        <img
                            alt='qatar-app'
                            loading="lazy"
                            src='https://i.imgur.com/KcpLUzi.png'
                            className={classes.Image}
                            style={{ maxWidth: '90vw' }}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} className={classes.quinielaInfo}>
                        <Box
                            textAlign={'left'}
                            fontWeight={300}
                            fontSize={30}
                            className={classes.quinielaNote}
                        >
                            {t('quinielaNote1')}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default QatarQuinielaProject;
