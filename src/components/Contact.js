/* eslint-disable no-useless-computed-key */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
const templateId = 'template_P6Dg0IXs';

const useStyles = makeStyles()({
  mainContainer: {
    background:
      'linear-gradient(180deg, rgba(62,157,239,1) 0%, rgba(0,163,255,1) 45%, rgba(62,193,239,1) 100%);',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    color: 'white',
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
  inputGrid: {
    marginBottom: '2vh',
    marginTop: '2vh',
  },
  input: {
    width: '50vw',
    ['@media(max-width: 600px)']: {
      width: '80vw',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
  },
  button: {
    color: 'white',
    width: '50vw',
    height: '5vh',
    borderColor: 'white',
    ['@media(max-width: 600px)']: {
      width: '80vw',
    },
  },
  email: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    width: '50vw',
    height: '100px',
    borderRadius: '10px',
    backgroundColor: 'green',
    ['@media(max-width: 600px)']: {
      width: '80vw',
    },
  },
  error: {
    backgroundColor: '#d44747',
    color: 'white',
  },
  errorHighlight:{
    borderColor: '#d44747',
  }
});

const maxCharacters = {
  message: 650,
  email: 50,
  name: 50
}

const validateContactForm = (formValues) => {
  let error = ""

  for(let key of Object.keys(formValues)){
    if(!formValues[key].trim()){
      error = `${key} is required`
      break
    }
  }
  return error
}

const Contact = () => {
  const [isDisabled, setDisabled] = useState(false)
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    if (event.target.value.length > maxCharacters[event.target.name]) {
      setValues({ ...values, [event.target.name]: event.target.value.slice(0, maxCharacters[event.target.name]) });
      return
    }
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const sendFeedback = (templateId, variables) => {
    setLoading(true);
    setError('');
    const error = validateContactForm(values)

    if (error) {
      setError(error)
      setLoading(false)
      return
    }

    window.emailjs
      .send('service_bdww47c', templateId, variables)
      .then((res) => {
        setSent(true);
        setLoading(false);
        setError('');
        console.log('Email successfully sent!');
        setTimeout(() => setSent(false), 10000);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        );
        setError(
          err.text ||
          'Please Try again or use a different method of communicating with me'
        );
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    if (!isDisabled) {
      sendFeedback(templateId, {
        from_message: values.message.slice(0, maxCharacters.message),
        from_name: values.name.slice(0, maxCharacters.name),
        from_email: values.email.slice(0, maxCharacters.email),
      });
      setDisabled(true)
      setTimeout(() => {
        setDisabled(false)
      }, 10000)
    }
  };

  return (
    <section className={classes.mainContainer}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid marginX={'auto'}
          item lg={10} md={10}>
          <Box
            marginX={'auto'}
            textAlign={'center'}
            fontWeight={700}
            fontSize={42}
            className={classes.projectsTitle}
          >
            {t('contactNote')}
          </Box>
        </Grid>
        <Container>
          <Box
            textAlign={'center'}
            fontWeight={300}
            fontSize={30}
            className={classes.projectsSummary}
          >
            {t('contactNote2')}
          </Box>
        </Container>
        <Grid container direction='column' justify='center' alignItems='center'>
          {sent && <div className={classes.email}>{t('email')}</div>}
          {error && (
            <div className={`${classes.email} ${classes.error}`}>
              <div>{t('error')}</div>
              <div>{error}</div>
            </div>
          )}
          <Grid className={classes.inputGrid}>
            <TextField
              id='outlined-multiline-flexible'
              label={t('fullname')}
              placeholder='John Doe'
              name='name'
              multiline
              rowsMax='4'
              value={values.name}
              className={cx(classes.input, error.includes("name") && classes.errorHighlight)}
              onChange={handleChange}
              variant='outlined'
            />
          </Grid>
          <Grid className={classes.inputGrid} id='contact'>
            <TextField
              id='outlined-multiline-flexible'
              label={'Email'}
              name='email'
              placeholder='JohnDoe@email.com'
              multiline
              rowsMax='4'
              value={values.email}
              onChange={handleChange}
              variant='outlined'
              className={cx(classes.input, error.includes("email") && classes.errorHighlight)}
            />
          </Grid>
          <Grid className={classes.inputGrid}>
            <TextField
              id='outlined-multiline-static'
              label={t('message')}
              name='message'
              multiline
              rows={8}
              variant='outlined'
              value={values.message}
              className={cx(classes.input, error.includes("message") && classes.errorHighlight)}
              onChange={handleChange}
            />
          </Grid>
          <Grid>
            <Button
              disabled={isDisabled}
              title={isDisabled ? 'Please wait to send another email' : 'Send email'}
              variant='outlined'
              className={cx(classes.button)}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress style={{ color: 'white' }} />
              ) : (
                t('contactMe')
              )}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
