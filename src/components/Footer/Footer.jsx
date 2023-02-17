import linkedin from '../../img/svg/linkedin.svg';
import twitter from '../../img/svg/twitter.svg';
import facebook from '../../img/svg/facebook.svg';
import pinterest from '../../img/svg/pinterest.svg';
import pinkSmile from '../../img/footer/Group.png';
import greenSmile from '../../img/footer/greenSmile.png';
import yellowSmile from '../../img/footer/yellowSmile(footer).png';

import {
  FooterSection,
  FooterInfo,
  Icons,
  IconItems,
  PinkSmile,
  GreenSmile,
  YellowSmile,
} from './Footer.styled';
import { Container } from '../App.styled';

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterInfo>
          <PinkSmile
            src={pinkSmile}
            alt="Instagram Logo"
            width={284}
            height={288}
          />

          <Icons>
            <IconItems>
              <a
                href="https://www.linkedin.com/company/zenbit-tech/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin Logo" />
              </a>
            </IconItems>

            <IconItems>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img src={twitter} alt="twitter Logo" />
              </a>
            </IconItems>

            <IconItems>
              <a
                href="https://www.facebook.com/zenBitTech/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook Logo" />
              </a>
            </IconItems>

            <IconItems>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pinterest} alt="pinterest Logo" />
              </a>
            </IconItems>
          </Icons>
          <GreenSmile src={greenSmile} alt="smile" width={78} height={97} />
          <YellowSmile src={yellowSmile} alt="smile" width={124} height={124} />
        </FooterInfo>
      </Container>
    </FooterSection>
  );
};
