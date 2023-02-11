import { FooterContainer, FooterText } from "./styled";

function Footer() {
    return (
      <FooterContainer>
        <FooterText>&copy; Developed by Lidar, Guy and Elad {new Date().getFullYear()}</FooterText>
      </FooterContainer>
    );
  }
  
  export default Footer;