import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
  Fade,
  FormControlLabel,
  FormGroup,
  Link,
  List,
  ListItem,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import styles from './Form.module.css';
import NextImage from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { LOGO_URL } from '../../../constants/url';
import { DesktopDatePicker } from '@mui/lab';
import GrowBox from '../../GrowBox/GrowBox';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../../../actions/user';

const Form = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const submitHandler = ({
    name,
    phoneNumber,
    email,
    password,
    confirmPassword,
  }) => {
    console.log('Hello');
    if (isSignIn) {
      const user = { email, password };
      console.log(user);

      dispatch(signIn(user, router));
    } else {
      const user = {
        name,
        phoneNumber,
        email,
        password,
        confirmPassword,
      };
      console.log(user);

      dispatch(signUp(user, router));
    }
  };

  const openSignUpModalHandler = () => setIsSignIn(true);

  const closeLoginModalHandler = () => setOpen(false);

  return (
    <Card className={styles.card}>
      <CardContent className={styles.logo}>
        <NextImage src={LOGO_URL} width={250} height={150} />
      </CardContent>
      <CardContent className={styles.formContainer}>
        {/* <Typography className={styles.loginText}>Sign In</Typography> */}
        <CardHeader
          title={
            <Typography variant="h4">
              {isSignIn ? 'Sign in' : 'Sign up'}
            </Typography>
          }
          subheader="Join in the crew"
        />
        <form onSubmit={handleSubmit(submitHandler)}>
          <List>
            {/* User name */}
            {!isSignIn && (
              <ListItem>
                <Controller
                  name="name"
                  control={control}
                  defaultValue={''}
                  rules={{
                    required: true,
                    minLength: 6,
                  }}
                  render={({ field }) => (
                    <TextField
                      autoFocus
                      size="small"
                      variant="outlined"
                      id="name"
                      fullWidth
                      label="Name *"
                      inputProps={{ type: 'text' }}
                      error={Boolean(errors.name)}
                      helperText={
                        errors.name
                          ? errors.name.type === 'minLength'
                            ? 'Name is invalid'
                            : 'Name is required'
                          : ''
                      }
                      {...field}
                    />
                  )}
                ></Controller>
              </ListItem>
            )}

            {/* User phone number */}
            {!isSignIn && (
              <ListItem>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue={''}
                  rules={{
                    required: true,
                    minLength: 10,
                  }}
                  render={({ field }) => (
                    <TextField
                      autoFocus
                      size="small"
                      variant="outlined"
                      id="phoneNumber"
                      fullWidth
                      label="Phone number *"
                      inputProps={{ type: 'number' }}
                      error={Boolean(errors.phoneNumber)}
                      helperText={
                        errors.phoneNumber
                          ? errors.phoneNumber.type === 'minLength'
                            ? 'Phone number is invalid'
                            : 'Phone number is required'
                          : ''
                      }
                      {...field}
                    />
                  )}
                ></Controller>
              </ListItem>
            )}

            {/* User email */}
            <ListItem>
              <Controller
                name="email"
                control={control}
                defaultValue={''}
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <TextField
                    autoFocus
                    size="small"
                    variant="outlined"
                    id="email"
                    fullWidth
                    label="Email *"
                    inputProps={{ type: 'email' }}
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === 'pattern'
                          ? 'Email is invalid'
                          : 'Email is required'
                        : ''
                    }
                    {...field}
                  />
                )}
              ></Controller>
            </ListItem>

            {/* User password */}
            <ListItem>
              <Controller
                name="password"
                control={control}
                defaultValue={''}
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    autoFocus
                    autoComplete="new-password"
                    size="small"
                    variant="outlined"
                    id="password"
                    fullWidth
                    label="Password *"
                    inputProps={{ type: 'password' }}
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === 'minLength'
                          ? 'Password is invalid'
                          : 'Password is required'
                        : ''
                    }
                    {...field}
                  />
                )}
              ></Controller>
            </ListItem>

            {!isSignIn && (
              <ListItem>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue={''}
                  rules={{
                    required: true,
                    minLength: 6,
                  }}
                  render={({ field }) => (
                    <TextField
                      autoFocus
                      size="small"
                      variant="outlined"
                      id="confirmPassword"
                      fullWidth
                      label="Confirm Password *"
                      inputProps={{ type: 'password' }}
                      error={Boolean(errors.confirmPassword)}
                      helperText={
                        errors.confirmPassword
                          ? errors.confirmPassword.type === 'minLength'
                            ? 'Confirm password is invalid'
                            : 'Confirm password is required'
                          : ''
                      }
                      {...field}
                    />
                  )}
                ></Controller>
              </ListItem>
            )}
            {/* User confirm password */}

            {/* Remember me */}
            <ListItem>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Remember me"
                />
              </FormGroup>
            </ListItem>

            {/* Submit button */}
            <ListItem>
              <Button fullWidth variant="contained" type="submit">
                CLICK
              </Button>
            </ListItem>
          </List>
        </form>
        <GrowBox />
        <Box sx={{ display: 'flex' }}>
          <Link component="button" variant="body2">
            Forget Password?
          </Link>
          <div className={styles.grow} />
          <Link
            component="button"
            variant="body2"
            onClick={() =>
              setIsSignIn((prevIsSignIn) => (prevIsSignIn ? false : true))
            }
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Form;
