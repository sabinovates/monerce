import React, { useState } from "react";
import RegLayout from "../../components/RegLayoutComp/RegLayout";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  FormContainer,
  StyledErrorMessage,
  SubmitButton,
} from "../../components/RegLayoutComp/MainStyle";
import { Link } from "react-router-dom";

const initialValues = {
  password: "",
  businessEmailAddress: "",
};

const validationSchema = Yup.object({
  businessEmailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginPage() {
  const [showErrorCard, setshowErrorCard] = useState(true);
  const [errorCardMsg, setErrorCardMsg] = useState(
    "email or password is incorrect"
  );

  const handleShowErrorCard = () => {
    setshowErrorCard(false);
  };

  return (
    <RegLayout
      showErrorCard={showErrorCard}
      handleShowErrorCard={handleShowErrorCard}
      errorCardMsg={errorCardMsg}
      cardHeader="Sign in Error"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <FormContainer>
            <h1>Sign in</h1>
            <h2>
              Unlock Exclusive Deals and Seamless Checkout: Sign in to Monerce
              Now!
            </h2>
            <div>
              <label htmlFor="businessEmailAddress*">
                Business Email Address*
              </label>
              <Field type="email" name="businessEmailAddress" />
              <StyledErrorMessage name="businessEmailAddress" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password*</label>
              <Field type="password" name="password" />
              <StyledErrorMessage name="password" component="div" />
            </div>
            <h5>
              <Link>Forgot password</Link>
            </h5>
            <SubmitButton
              type="submit"
              disabled={
                !values.password || !values.businessEmailAddress || isSubmitting
              }
              onClick={() => console.log("yes")}
            >
              Sign in
            </SubmitButton>
            <h4>
              Don’t have an account?
              <Link to="/signup">Sign up</Link>
            </h4>
          </FormContainer>
        )}
      </Formik>
    </RegLayout>
  );
}

export default LoginPage;
