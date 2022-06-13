import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrMsg from "../UI/ErrMsg/ErrMsg";
import CenterContainer from "../UI/CenterContainer/CenterContainer";
import { REGEX_PASSWORD, REGEX_EMAIL } from "../../Constant/Constant";
import { AuthContext } from "../../store/AuthProvider";

export default function Login() {
  const { loginHandler } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginHandler(data);
  };

  const errorEmail = () => {
    switch (errors.email.type) {
      case "required":
        return (
          <ErrMsg className={classes.errors}>Please enter your email!</ErrMsg>
        );
      case "pattern":
        return <ErrMsg className={classes.errors}>Invalid email!</ErrMsg>;
      case "maxLength":
        return (
          <ErrMsg className={classes.errors}>
            Your email length must be less than 20 chars
          </ErrMsg>
        );
      case "minLength":
        return (
          <ErrMsg className={classes.errors}>
            Your email length must be more than 5 chars
          </ErrMsg>
        );
      default:
        return;
    }
  };

  const errorPassword = () => {
    switch (errors.password.type) {
      case "required":
        return (
          <ErrMsg className={classes.errors}>
            Please enter your password!
          </ErrMsg>
        );
      case "pattern":
        return <ErrMsg className={classes.errors}>Invalid password!</ErrMsg>;
      case "maxLength":
        return (
          <ErrMsg className={classes.errors}>
            Your password length must be less than 20 characters
          </ErrMsg>
        );
      case "minLength":
        return (
          <ErrMsg className={classes.errors}>
            Your password length must be more than 5 characters
          </ErrMsg>
        );
      default:
        return;
    }
  };

  return (
    <CenterContainer>
      <Card className={classes["login-form"]}>
        <h2>Sign In</h2>
        <form
          className={classes["form-control"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={`${classes.control} `}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern: REGEX_EMAIL,
                minLength: 5,
                maxLength: 20,
              })}
            />
            {errors.email && errorEmail()}
          </div>
          <div className={`${classes.control} `}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Please enter your password"
              {...register("password", {
                required: true,
                pattern: REGEX_PASSWORD,
                maxLength: 20,
                minLength: 5,
              })}
            />
            {errors.password && errorPassword()}
          </div>
          <Button className={classes.loginBtn} type="submit">
            Login
          </Button>
        </form>
      </Card>
    </CenterContainer>
  );
}
