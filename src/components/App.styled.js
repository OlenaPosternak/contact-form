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

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }

  input {
    margin: 0;
    /* padding: 0; */
  }

  img {
    display: block;
    /* max-width: 100%; */
    height: auto;
  }

  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
`;

export const Section = styled.section`
  .section {
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (min-width: 1200px) {
      padding-top: 94px;
      padding-bottom: 94px;
    }
  }
`;

export const Body = styled.div`
  background-image: url(${img});
  padding-left: -92px;
`;

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
