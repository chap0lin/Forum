import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { login } from "../services/api";
import {
  PageContainer,
  Content,
  LeftSection,
  RegisterButton,
  RightSection,
  LoginBox,
  LoginTitle,
  Input,
  OptionsRow,
  RememberMe,
  ForgotPassword,
  LoginButton,
  Divider,
  SocialButton,
  FooterText,
} from "./Login.style";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // limpa erro anterior

    try {
      const data = await login(email, password); // token salvo no localStorage
      console.log("Token JWT:", data.token);
      navigate("/"); // redireciona para Home
    } catch (err) {
      console.error(err);
      setError("E-mail ou senha incorretos");
    }
  };

  return (
    <PageContainer>
      <Header />

      <Content>
        <LeftSection>
          <h1>Faça parte deste movimento e ajude a mudar o Brasil!</h1>
          <RegisterButton>Registre-se Agora!</RegisterButton>
        </LeftSection>

        <RightSection>
          <LoginBox>
            <LoginTitle>Faça seu Login</LoginTitle>
            <form onSubmit={handleLogin}>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <OptionsRow>
                <RememberMe>
                  {/* TODO: implementar funcionalidade "Lembrar meus dados" */}
                  <input type="checkbox" checked />
                  Lembrar meus dados
                </RememberMe>

                <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>
              </OptionsRow>

              <LoginButton type="submit">Login</LoginButton>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <Divider>
              <span>ou</span>
            </Divider>

            <SocialButton bg="#3b5998">Login com Facebook</SocialButton>
            <SocialButton bg="#1da1f2">Login com Twitter</SocialButton>

            <FooterText>
              Ainda não tem uma conta?<a href="#">{" "}Registre-se agora!</a> <br />É
              muito simples e você pode ajudar a mudar o Brasil
            </FooterText>
          </LoginBox>
        </RightSection>
      </Content>

      <Footer />
    </PageContainer>
  );
}
