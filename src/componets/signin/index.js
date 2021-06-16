import React from "react";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormBtn,
  FormBtn1,
  FormInput,
  Text,
} from "./SignElements";

const SignInSection = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="/">
            
              <FormH1>Sign in your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormBtn type="submit">Continue</FormBtn>
              <FormBtn1 to='/' type="submit">Back</FormBtn1>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignInSection;
