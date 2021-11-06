import React from "react";
import {
  // useHistory,
  Redirect,
} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import { Person } from "@material-ui/icons";
// core components
import Header from "components/Header/Header.js";
import { MyCustomHeaderLeftLinks } from "components/Header/MyCustomHeaderLinks";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Notification from "components/MyNotifications/Notification.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

import { loginService } from "services/userServices";

import * as yup from "yup";
import { useFormik } from "formik";

const useStyles = makeStyles(styles);

const validationSchema = yup.object({
  username: yup
    .string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is requried"),
});

const myInitialValues = Object.freeze({
  username: "",
  password: "",
});

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();

  const { ...rest } = props;

  const formik = useFormik({
    initialValues: myInitialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const isLoginSuccess = await loginService(values);
      isLoginSuccess == false
        ? setNotify({
            isOpen: true,
            message: "Login false. Wrong username or password...",
            type: "error",
          })
        : null;
    },
  });

  const token = localStorage.getItem("access_token");

  return token ? (
    <Redirect
      to={{
        pathname: "/home-page",
        state: { isLogin: true },
      }}
    />
  ) : (
    <div>
      <Header
        absolute
        color="transparent"
        brand={<MyCustomHeaderLeftLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      name="username"
                      error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                      }
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      helperText={
                        formik.touched.username && formik.errors.username
                      }
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      name="password"
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type="submit">
                      Sign in
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
