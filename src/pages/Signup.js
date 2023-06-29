import React from "react";
import {
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "../components/Styles";

import Logo from "../assets/logo.jpg";

// Formik
import { Formik, Form } from "formik";
import { TextInput } from "./../components/FormLib";
import * as Yup from 'yup';

// Icons
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";

// Loader
import { ThreeDots } from "react-loader-spinner";

const Signup = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Signup
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            dateOfBirth: "",
            name: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
            name: Yup.string().required("Required"),
            dateOfBirth: Yup.date().required("Required"),
            repeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Passwords must match"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(true); // Make sure to set isSubmitting to false when the submission is complete
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="First and Last name"
                icon={<FiUser/>}
              />

              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="Email Address"
                icon={<FiMail />}
                />

              <TextInput
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                icon={<FiCalendar />}
                />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />

            <TextInput
                name="repeatpassword"
                type="password"
                label="Repeat Password"
                placeholder="********"
                icon={<FiLock />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Signup</StyledFormButton>
                )}

                {isSubmitting && (
                  <ThreeDots
                    type="ThreeDots"
                    color={colors.theme}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          Already have an account?<TextLink to="/Login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>
        This is Michael Sylvester's capstone project &copy;2023
      </CopyrightText>
    </div>
  );
};

export default Signup;
