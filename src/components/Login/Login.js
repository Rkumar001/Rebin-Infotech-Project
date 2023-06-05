import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, TextField, Button } from "@mui/material";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled(Form)`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/list-user");
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Wrapper>
            <Box>
              <Card sx={{ maxWidth: "400px", margin: "auto" }}>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <h2>Welcome Back !</h2>
                </Box>
                <CardContent>
                  <LoginForm>
                    <Field
                      name="email"
                      as={TextField}
                      label="Email"
                      type="email"
                      fullWidth
                      margin="normal"
                      error={
                        formikProps.touched.email &&
                        Boolean(formikProps.errors.email)
                      }
                      helperText={
                        formikProps.touched.email && formikProps.errors.email
                      }
                      aria-label="Email"
                      aria-describedby="email-helper-text"
                    />
                    <Field
                      name="password"
                      as={TextField}
                      label="Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      error={
                        formikProps.touched.password &&
                        Boolean(formikProps.errors.password)
                      }
                      helperText={
                        formikProps.touched.password &&
                        formikProps.errors.password
                      }
                      aria-label="Password"
                      aria-describedby="password-helper-text"
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ mt: 2 }}
                      disabled={formikProps.isSubmitting}
                      type="submit"
                    >
                      Login
                    </Button>
                  </LoginForm>
                </CardContent>
              </Card>
            </Box>
          </Wrapper>
        )}
      </Formik>
    </>
  );
};

export default Login;
