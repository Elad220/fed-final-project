import { FooterContainer, FooterText } from "./styled";

function Footer() {
    return (
      <FooterContainer>
        <FooterText>&copy; Developed by Lidar Baruch, Guy Ofir and Elad Asaf {new Date().getFullYear()} &copy;</FooterText>
      </FooterContainer>
    );
  }
  
  export default Footer;