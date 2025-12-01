// src/components/Header.jsx
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  BottomRow,
  LogoTextContainer,
  LogoImage,
  LogoText,
  LineTop,
  LineBottom,
  RightColumn,
  TopRow,
  Separator,
  LoginLink,
  RegisterLink,
  Topics,
  TopicLink,
} from "./Header.style";

// ======= COMPONENTE ======= //
export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BottomRow>
        {/* Lado esquerdo: logo + título */}
        <LogoTextContainer>
          <LogoImage src={logo} alt="Logo Movimento Brasil Futuro" />
          <LogoText>
            <LineTop>Movimento</LineTop>
            <LineBottom>Brasil Futuro</LineBottom>
          </LogoText>
        </LogoTextContainer>

        {/* Lado direito: login/registre-se + tópicos */}
        <RightColumn>
          <TopRow>
            <LoginLink onClick={() => navigate("/login")}>Login</LoginLink>
            <Separator>|</Separator>
            <RegisterLink onClick={() => navigate("/register")}>Registre-se</RegisterLink>
          </TopRow>

          <Topics>
            <TopicLink onClick={() => navigate("/")}>Inicio</TopicLink>
            <TopicLink onClick={() => navigate("/estrategia")}>Estratégia</TopicLink>
            <TopicLink onClick={() => navigate("/forum")}>Fórum</TopicLink>
            <TopicLink onClick={() => navigate("/mercado")}>Mercado</TopicLink>
            <TopicLink onClick={() => navigate("/colunistas")}>Colunistas</TopicLink>
            <TopicLink onClick={() => navigate("/parcerias")}>Parcerias</TopicLink>
          </Topics>
        </RightColumn>
      </BottomRow>
    </HeaderContainer>
  );
}
