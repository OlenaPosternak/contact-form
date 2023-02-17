import styled from '@emotion/styled';

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
`;
export const Icons = styled.ul`
  display: flex;
  gap: 39px;
  padding-left: 340px;
  text-decoration: none;
  list-style: none;
`;

export const IconItems = styled.li`
  padding: 4px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  &:hover,
  &:focus {
    background-color: #f472b7;
    border: 1px solid #f472b7;
    border-radius: 50%;
  }
`;

export const PinkSmile = styled.img`
  position: absolute;
  bottom: -60px;
  left: 15px;
`;

export const GreenSmile = styled.img`
  position: absolute;
  top: 0;
  right: 128px;
`;

export const YellowSmile = styled.img`
  position: absolute;
  right: -38px;
`;
