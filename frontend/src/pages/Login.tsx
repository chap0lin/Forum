  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import styled from "@emotion/styled";
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import { login } from "../services/api";

  // ======= CONTAINERS GERAIS ======= //
  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: "Inter", sans-serif;
    background-color: #3b91cf;
  `;

  // ======= SEÇÃO PRINCIPAL ======= //
  const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
    background-color: #3b91cf;
  `;

  const LeftSection = styled.div`
    flex: 1;
    color: white;
    padding-right: 2rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 1.5rem;
      max-width: 450px;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      opacity: 0.9;
      margin-bottom: 2rem;
      max-width: 400px;
    }
  `;

  const RegisterButton = styled.button`
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: white;
      color: #3b91cf;
    }
  `;

  const RightSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const LoginBox = styled.div`
    background-color: #fff;
    border-radius: 6px;
    padding: 1rem;
    width: 60%;
    max-width: 380px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    text-align: left;
  `;

  const LoginTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    color: #333;
  `;

  const Input = styled.input`
    width: 91%;
    padding: 0.7rem 0.9rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.95rem;

    &:focus {
      outline: none;
      border-color: #3b91cf;
    }
  `;

  const OptionsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.85rem;
  `;

  const RememberMe = styled.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    color: #333;

    input {
      cursor: pointer;
    }
  `;

  const ForgotPassword = styled.a`
    color: #007bff;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `;

  const LoginButton = styled.button`
    width: 100%;
    background-color: #009739;
    color: white;
    font-weight: bold;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #007f2f;
    }
  `;

  const Divider = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 0.5rem;

    &:before,
    &:after {
      content: "";
      flex: 1;
      border-bottom: 1px solid #ccc;
    }

    &:before {
      margin-right: 0.5em;
    }

    &:after {
      margin-left: 0.5em;
    }

    span {
      font-size: 0.85rem;
      color: #666;
    }
  `;

  const SocialButton = styled.button<{ bg: string }>`
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 0.8rem;
    background-color: ${(props) => props.bg};
  `;

  const FooterText = styled.p`
    font-size: 0.85rem;
    color: #666;
    margin-top: 1rem;
    text-align: center;

    a {
      color: #3b91cf;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo justo ac nisi pretium, a egestas lorem elementum.
            </p>
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
                    <input type="checkbox" />
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
                Você não tem uma conta?<a href="#">Registre-se agora!</a> <br />É
                muito simples e você pode ajudar a mudar o Brasil
              </FooterText>
            </LoginBox>
          </RightSection>
        </Content>

        <Footer />
      </PageContainer>
    );
  }
