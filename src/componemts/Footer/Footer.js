/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
import { FooterContainer, FooterText } from './styled';
import { copyrightsMessage } from '../../consts';

/* This component defines a footer for our copyrights footer in the table's page */
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {copyrightsMessage} {new Date().getFullYear()} &copy;
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
