import React from "react";
import RegLayout from "../../components/RegLayoutComp/RegLayout";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  FormContainer,
  StyledErrorMessage,
} from "../../components/RegLayoutComp/MainStyle";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubmitButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#d3c7eb" : "#492C7C")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
const initialValues = {
  password: "",
  confirmPassword: "",
  businessName: "",
  businessPhone: "",
  businessEmailAddress: "",
  businessAddress: "",
  InvitaionCode: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  businessName: Yup.string().required("Business Name  is required"),
  businessPhone: Yup.string().required("Business Phone  is required"),
  businessEmailAddress: Yup.string().required(
    "Business Email Address  is required"
  ),
  businessAddress: Yup.string().required("Business Address  is required"),
  InvitaionCode: Yup.string().required("Business Address  is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function SignupPage() {
  return (
    <RegLayout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <FormContainer>
            <h1>Create an account</h1>
            <h2>
              To become a merchant with Monerce, you can sign up and create an
              account to join their platform.
            </h2>
            <div>
              <label htmlFor="InvitaionCode">Invitaion Code*</label>
              <Field type="text" name="InvitaionCode" />
              <h3>
                Text <span>MERCHANT</span> to <span>+231880538190</span>, or{" "}
                <span>+231770538190</span> to get invitation code{" "}
              </h3>
              <StyledErrorMessage name="InvitaionCode" component="div" />
            </div>

            <div>
              <label htmlFor="businessName">Business Name*</label>
              <Field type="text" name="businessName" />
              <StyledErrorMessage name="businessName" component="div" />
            </div>
            <div>
              <label htmlFor="businessPhone*">Business Phone*</label>
              <Field type="phone" name="businessPhone" />
              <StyledErrorMessage name="businessPhone" />
            </div>
            <div>
              <label htmlFor="businessEmailAddress*">
                Business Email Address*
              </label>
              <Field type="text" name="businessEmailAddress" />
              <StyledErrorMessage name="businessEmailAddress" component="div" />
            </div>
            <div>
              <label htmlFor="businessAddress*">Business Address*</label>
              <Field type="text" name="businessAddress" />
              <StyledErrorMessage name="businessAddress" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password*</label>
              <Field type="password" name="password" />
              <StyledErrorMessage name="password" component="div" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password*</label>
              <Field type="password" name="confirmPassword" />
              <StyledErrorMessage name="confirmPassword" component="div" />
            </div>
            <SubmitButton
              type="submit"
              disabled={
                !values.password ||
                !values.confirmPassword ||
                !values.businessName ||
                !values.businessPhone ||
                !values.businessEmailAddress ||
                !values.businessAddress ||
                !values.InvitaionCode ||
                isSubmitting
              }
              onClick={() => console.log("yes")}
            >
              Register now
            </SubmitButton>
            <h4>
              Already have an account?
              <Link to="">Log in</Link>
            </h4>
          </FormContainer>
        )}
      </Formik>
    </RegLayout>
  );
}

export default SignupPage;
