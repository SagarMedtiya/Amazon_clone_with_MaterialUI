import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { Button, Paper, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/"); //redirects to home page
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Paper elevation={10}>
        <Grid align="center">
          <Link to="/">
            <img
              src="https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?fit=841%2C240&ssl=1"
              className="login__img"
            />
          </Link>
          <div className="login__container">
            <h1>Sign-In</h1>
            <form className="login__form">
              <div className="login__TextField">
                <TextField
                  className="login__TextField"
                  label="Email"
                  variant="outlined"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__TextField">
                <TextField
                  className="login__TextField"
                  label="Password"
                  variant="outlined"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                onClick={signin}
                variant="contained"
                color="default"
              >
                Sign-In
              </Button>
            </form>
            <p>
              By continuing, you agree to Amazon's FAKE CLONE Conditions of Use
              and Privacy Notice.
            </p>
            <Button onClick={register} variant="contained" color="default">
              Create your amazon account
            </Button>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;
