import styled from '@emotion/styled';
import { smile } from '../../animation';

export const MapImg = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    height: 100%;
  }
`;
export const ImgSection = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 970px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const PinkSmile = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    left: px;
    bottom: 0px;
    right: 380px;
  }

  &:hover,
  &:focus {
    animation: ${smile} 1s ease infinite;
  }
`;

export const YellowSmile = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    left: px;
    bottom: 180px;
    right: 560px;
  }
  &:hover,
  &:focus {
    animation: ${smile} 1s ease infinite;
  }
`;
