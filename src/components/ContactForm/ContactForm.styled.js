import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { Field, Form, ErrorMessage } from 'formik';

export const ContactSection = styled.div`
  padding-top: 150px;
  @media screen and (min-width: 1440px) {
    padding-top: 179px;
    position: relative;
    min-height: calc(100vh - 200px);
    min-height: 979px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 35px;
  line-height: 1.3;

  @media screen and (min-width: 1440px) {
    text-align: left;
    margin: 0;
    font-size: 40px;
  }
`;

export const FormSection = styled(Form)`
  margin-top: 15px;
  margin-bottom: 13px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 23px;
  }
`;
export const FormInput = styled(Field)`
  width: 350px;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;

  font-size: 18px;

  color: #2d2d2d;

  border-radius: 10px;
  border-left: 1px solid #dcdcdc;
  border-top: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;

  outline: none;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 450px;
    height: 70px;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media screen and (min-width: 1440px) {
    width: 467px;
    height: 93px;
    padding-left: 45px;
    padding-right: 45px;

    font-size: 18px;
  }

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

export const Error = styled(ErrorMessage)`
padding-left: 10px;
  color: red;
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
