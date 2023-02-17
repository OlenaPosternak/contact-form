import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { Field, Form } from 'formik';

export const ContactSection = styled.div`
  padding-top: 179px;
  position: relative;
  min-height: calc(100vh - 200px);
  min-height: 979px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 40px;
  line-height: 1.3;
`;

export const FormSection = styled(Form)`
  margin-top: 30px;
  margin-bottom: 23px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FormInput = styled(Field)`
  width: 557px;
  height: 93px;
  padding-left: 45px;
  padding-right: 45px;

  font-size: 18px;
  color: #2d2d2d;

  border-radius: 10px;
  border-left: 1px solid #dcdcdc;
  border-top: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;

  outline: none;

  &:hover,
  &:focus {
    border-left: 1px solid #f472b7;
    border-top: 1px solid #f472b7;
    border-right: 1px solid #f472b7;
    border-bottom: 1px solid #f472b7;
  }

  &::placeholder {
    color: #2d2d2d;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const bounce = keyframes`
     0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  background-color: #fad34f;
  color: #ffffff;
  
  font-size: 18px;

  width: 218px;
  height: 73px;
  border-radius: 500px;
  border: 1px solid #fad34f;

  &:hover,
  &:focus {
    background-color: #f472b7;
    border: 1px solid #f472b7;
    animation: ${bounce} 1s ease infinite;
  }
`;

export const Smile = styled.img`
  position: absolute;
  left: 30px;
  top: 20px;
`;

export const Elipse = styled.img`
  position: absolute;
  right: 714px;
  top: 21px;
`;
