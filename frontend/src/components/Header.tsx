// src/components/Header.jsx
import logo from "../assets/logo.png";
import React from "react";
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
  const [isColaborador, setIsColaborador] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const payload = JSON.parse(jsonPayload);

        if (payload.level === "colaborador") {
          setIsColaborador(true);
        }
      } catch (e) {
        console.error("Error decoding token", e);
      }
    }
  }, []);

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
            {isColaborador && (
              <TopicLink onClick={() => navigate("/gerenciar-movimento")}>
                Gerenciar movimento
              </TopicLink>
            )}
          </Topics>
        </RightColumn>
      </BottomRow>
    </HeaderContainer>
  );
}
