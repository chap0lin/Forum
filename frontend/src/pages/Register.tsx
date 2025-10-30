import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from "../services/api"; // instância do axios

// ======= CONTAINERS GERAIS ======= //
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: #3b91cf;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 3rem;
  background-color: #3b91cf;
`;

const LeftSection = styled.div`
  flex: 1;
  color: white;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const RegisterBox = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 2rem;
  width: 80%;
  max-width: 450px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: left;
`;

const RegisterTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 0,5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.7rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #3b91cf;
  }
`;

const Select = styled.select`
  flex: 1 ;
  padding: 0.7rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #3b91cf;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #333;
  margin: 0.5rem 0 1rem;

  a {
    color: #3b91cf;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #009739;
  color: white;
  font-weight: bold;
  padding: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007f2f;
  }
`;

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sex, setSex] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!terms) {
      setError("Você deve aceitar os termos e condições");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      await api.post("/users", {
        firstName,
        lastName,
        email,
        password,
        cpf,
        phone,
        birthDate,
        sex,
      });

      setSuccess("Cadastro realizado com sucesso! Agora você pode fazer login.");
      // navigate("/login"); // opcional
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Erro ao cadastrar usuário");
    }
  };

  return (
    <PageContainer>
      <Header />
      <Content>
        <LeftSection>
          <h1>Junte-se a este movimento e ajude a mudar o Brasil!</h1>
          <p>
            Participe de uma comunidade comprometida com a transformação do nosso país.
            Ao se envolver, você contribui para iniciativas de educação, cidadania e
            desenvolvimento social, ajudando a construir um futuro mais justo e próspero
            para todos.
          </p>
        </LeftSection>

        <RightSection>
          <RegisterBox>
            <RegisterTitle>Cadastre-se no Movimento Brasil Futuro</RegisterTitle>
            <Form onSubmit={handleRegister}>
              <Row>
                <Input
                  type="text"
                  placeholder="Nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Row>

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
              <Input
                type="password"
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                type="date"
                placeholder="Data de nascimento"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />

              <Select value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="" disabled>
                  Sexo
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </Select>

              <CheckboxRow>
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                Eu aceito os <a href="#">Termos e Condições</a>
              </CheckboxRow>

              <SubmitButton type="submit">Finalizar Cadastro</SubmitButton>

              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
            </Form>
          </RegisterBox>
        </RightSection>
      </Content>
      <Footer />
    </PageContainer>
  );
}
