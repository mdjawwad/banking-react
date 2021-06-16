import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 680px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    rgba(1, 147, 86, 1) 0% rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;


  }
`;

export const LogoH1 = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight:700;'
font-size:82px;

@media screen and (max-width: 480px){
margin-left: 16px;
margin-top: 8px;
}
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-weight: 400;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  padding: 80px 32px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 14px;
`;
export const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
`;
export const FormBtn = styled.button`

color: #fff;
font-size: 20px;
background:#01bf71;
padding: 16px 0;
border:none;
border-radius: 5px;
cursor:pointer;


`;
export const FormBtn1 = styled(Link)`

color: #000;
text-decoration: none;
text-align: center;
margin-top: 1rem;
font-size: 20px;
background:#01bf71;
padding: 16px 0;
border:none;
border-radius: 5px;
cursor:pointer;


`;
export const Text = styled.span`
  color: #fff;
  font-size: 20px;
  margin-top: 24px;
  text-align: center;
`;
