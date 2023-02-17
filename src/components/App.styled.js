import styled from '@emotion/styled';
import img from '../img/Cloud.png';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1200px;
  }

  input {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

export const Section = styled.section`
  .section {
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (min-width: 1400px) {
      padding-top: 94px;
      padding-bottom: 94px;
    }
  }
`;

export const Body = styled.div`
  background-image: url(${img});
  padding-left: -92px;
`;
