// src/components/Header.jsx
import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

// ======= ESTILOS ======= //
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #000000;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.9rem;
  color: #000;
`;

const LogoTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

const LineTop = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const LineBottom = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  padding-right: 2rem;
  margin-top: 1.5rem;
`;

const TopRow = styled.div`
  display: flex;
  gap: 0.3rem;
  font-weight: bold;
  font-size: 0.95rem;
`;

const Separator = styled.span`
  color: #007bff;
`;

const LoginLink = styled.span`
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
`;

const RegisterLink = styled.span`
  color: #007bff;
  cursor: pointer;
`;

const Topics = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const TopicLink = styled.span`
  cursor: pointer;
  font-weight: semi-bold;
  color: #000;
  &:hover {
    color: #007bff;
  }
`;

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
