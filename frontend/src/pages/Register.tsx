import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from "../services/api"; // instância do axios
import {
  PageContainer,
  Content,
  LeftSection,
  RightSection,
  RegisterBox,
  RegisterTitle,
  Form,
  Row,
  Input,
  Select,
  CheckboxRow,
  SubmitButton,
} from "./Register.style";

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
