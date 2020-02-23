import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useProfileProvider } from 'contexts/profile';
import { Button, TextField, Grid, Container, CssBaseline, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Register = () => {
  const { register } = useProfileProvider();
  const [userDetails, setUserDetails] = useState({});
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  /** Material-UI */
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const attemptRegister = (event) => {
    event.preventDefault();
    register(userDetails);
    setRedirectToDashboard(true);
    //TODO: Check for 401 and redirect if 200.
  };
  /**
   * A reusable function to update the state with a key/value pair where the
   * key is the name of the component and the value is its most recent value...
   *
   * This is a great pattern to use if you need to make the UI react to the input
   * in more complex forms and if you need the most recent value of the users'
   * submission before they click submit for validation purposes...
   * @param name
   * @param value
   */
  const updateInput = ({ target: { name, value } }) => {
    setUserDetails(prevState => ({ ...prevState, [name]: value }));
  };

  if (redirectToLogin) {
    return <Redirect to="/" />
  };

  if (redirectToDashboard) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Button
          variant="contained"
          onClick={() => setRedirectToLogin(true)}
        >
          Back to Login
      </Button>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
      </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
                onChange={updateInput} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                onChange={updateInput} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                label="User Name"
                onChange={updateInput} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="password"
                variant="outlined"
                required
                fullWidth
                label="Password"
                onChange={updateInput} />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onChange={updateInput}
            onClick={attemptRegister}
          >
            Register
          </Button>
        </form>
      </div>
    </Container >
  );
};

export default Register;
