import styled from '@emotion/styled';
import { smile } from '../../animation';

export const FooterSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 200px;
  background-color: #fafafa;
  overflow: hidden;
  margin-top: 20px;
`;

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;
export const Icons = styled.ul`
  display: flex;
  gap: 39px;
  text-decoration: none;
  list-style: none;

  @media screen and (min-width: 1440px) {
    padding-left: 340px;
  }
`;

export const IconItems = styled.li`
  padding: 4px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border-radius 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #f472b7;
    border: 1px solid #f472b7;
    border-radius: 50%;
  }
`;

export const PinkSmileFooter = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    bottom: -60px;
    left: 15px;
  }

  &:hover,
  &:focus {
    animation: ${smile} 1s ease infinite;
  }
`;

export const GreenSmile = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 128px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 0;
    right: 128px;
  }
`;

export const YellowSmile = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    right: -38px;
  }
  
  &:hover,
  &:focus {
    animation: ${smile} 1s ease infinite;
  }
`;
