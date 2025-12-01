import logo from "../assets/logo.png";
import {
  FooterContainer,
  FooterLeft,
  FooterLinks,
  FooterCopyright,
} from "./Footer.style";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <img
          src={logo}
          alt="Logo Movimento Brasil Futuro"
          width={40}
          height={40}
        />
        <FooterCopyright>
          © 2017 MOVIMENTO BRASIL FUTURO. Todos os direitos reservados.
        </FooterCopyright>
      </FooterLeft>

      <FooterLinks>
        <a href="#">Dê sua Opinião</a>
        <a href="#">Contato</a>
        <a href="#">Política de Privacidade</a>
      </FooterLinks>
    </FooterContainer>
  );
}
