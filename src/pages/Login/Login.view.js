import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import useStyles from './Login.style';
import Logo from '../../assets/images/logo.svg';

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitClick = (event) => {
    localStorage.setItem('auth-token', 'true');
  };

  return (
    <>
      <Grid container className={classes.header} justify="center" alignItems="center">
        <Grid item sm={2} xs={5}>
          <img src={Logo} />
        </Grid>
        <Grid item sm={1} xs={1} className={classes.divider} />
        <Grid item sm={5} xs={6}>
          <Typography variant="h4" color="secondary">
            <strong>Welcome</strong>
              &nbsp;to National Health Authority - Health Information Provider Application
          </Typography>
        </Grid>
      </Grid>
      <Container component="main" maxWidth="xs" className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
            disabled={username === '' || password === ''}
          >
            LOGIN
          </Button>
          <Link to="/forgot-password" className={classes.link} variant="body2" component={RouterLink}>
            NEED ASSISTANCE?
          </Link>
        </form>
      </Container>
    </>
  );
};

export default Login;
