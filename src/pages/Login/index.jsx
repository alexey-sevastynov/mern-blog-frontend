import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Login.module.scss";
import { fetchAuth, selectAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "alexseva94@gmail.com",
      password: "1s2e3v4aalexxs",
    },
  });
  console.log("isAuth", isAuth);
  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)} // red border
          helperText={errors.email?.message}
          {...register("email", { required: "indicate email" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)} // red border
          helperText={errors.password?.message}
          {...register("password", { required: "indicate password" })}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
