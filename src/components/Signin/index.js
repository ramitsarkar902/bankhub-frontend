import React from "react";
import {
  Container,
  FormWrap,
  Text,
  FormButton,
  FormLabel,
  FormInput,
  Icon,
  Form,
  FormContent,
  FormH1,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">bankHub</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />

              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
