import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
  margin: 0px 32px 0px;

  @media screen and (max-width: 480px) {
    margin: 8px 0px 16px 0px;
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
  max-width: 400px;
  height: auto%;
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
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  color: #fff;
  margin: 0px 0px 8px;
  font-size: 14px;
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 4px;
  margin-bottom: 32px;
  padding: 16px 16px;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
`;
