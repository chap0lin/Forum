  import React from "react";
  import styled from "@emotion/styled";
  import { Link } from "react-router-dom";
  import Header from "../components/Header";

  // Styled Components
  // Note: These translate the TailwindCSS classes and custom styles from the original HTML.

  const theme = {
    colors: {
      blue: "#002776",
      green: "#009739",
      yellow: "#FFDF00",
      white: "#FFFFFF",
      textPrimary: "#374151", // gray-800
      textSecondary: "#6B7280", // gray-600
      bgLight: "#F9FAFB", // gray-100
      bgWhite: "#FFFFFF",
    },
    fonts: {
      body: "'Inter', sans-serif",
    },
  };

  const Body = styled.div`
    background-color: ${theme.colors.bgLight};
    color: ${theme.colors.textPrimary};
    font-family: ${theme.fonts.body};
    margin: 0;
  `;

  const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;


  const HeroSection = styled.section`
    color: ${theme.colors.white};
    padding: 5rem 0;
    text-align: center;
    background-color: #002776;
    background-image: linear-gradient(19deg, #002776 0%, #009739 100%);

    @media (min-width: 768px) {
      padding: 8rem 0;
    }
  `;

  const HeroTitle = styled.h2`
    font-size: 2.25rem;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      font-size: 3.75rem;
    }
  `;

  const HeroSubtitle = styled.p`
    font-size: 1.125rem;
    margin-bottom: 2rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    color: ${theme.colors.yellow};
    font-weight: 600;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  `;

  const HeroText = styled.p`
    font-size: 1rem;
    margin-bottom: 3rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  `;

  const CtaButton = styled.a`
    display: inline-block;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.blue};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 1rem 2.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
        0 4px 6px -2px rgba(0, 0, 0, 0.1);
    }
  `;

  const Section = styled.section`
    padding: 4rem 0;
    background-color: ${(props: { bg?: string }) => props.bg || "transparent"};
  `;

  const SectionTitle = styled.h3`
    font-size: 1.875rem;
    font-weight: bold;
    color: ${theme.colors.textPrimary};
    margin-bottom: 1.5rem;
    text-align: center;
  `;

  const SectionParagraph = styled.p`
    max-width: 56rem;
    margin: 0 auto 3rem auto;
    color: ${theme.colors.textSecondary};
    text-align: center;
  `;

  const Grid = styled.div`
    max-width: 90%;
    display: grid;
    gap: 2rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const Card = styled.div`
    background-color: ${theme.colors.bgLight};
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  `;

  const CardTitle = styled.h4`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${theme.colors.blue};
    margin-bottom: 0.5rem;
  `;

  const TopicGrid = styled.div`
    display: grid;
    gap: 1.5rem;
    max-width: 64rem;
    margin: 0 auto;
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const TopicCardStyled = styled.div`
    background-color: ${theme.colors.bgWhite};
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-left: 4px solid ${theme.colors.yellow};
    &:hover {
      transform: scale(1.05);
      border-left-color: ${theme.colors.green};
    }
  `;

  const TopicCardTitle = styled.h5`
    font-weight: bold;
    font-size: 1.125rem;
    color: ${theme.colors.green};
    margin-bottom: 0.5rem;
  `;

  const HowItWorksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 4rem;
    }
  `;

  const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;

  const StepCircle = styled.div<{ color: string; bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    border-radius: 9999px;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  `;

  const Footer = styled.footer`
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    padding: 2rem 0;
    text-align: center;
  `;

  const App: React.FC = () => {
   

    return (
      <Body>
        <Header/>
      

        <main>
          <HeroSection>
            <Container>
              <HeroTitle>Cansado da velha política?</HeroTitle>
              <HeroSubtitle>
                Nossos políticos não nos representam. É hora de tomar as rédeas
                e construir o Brasil que queremos.
              </HeroSubtitle>
              <HeroText>
                Acreditamos que a mudança começa com diálogo, educação e um
                plano concreto. Junte-se a nós para discutir ideias e criar um
                futuro melhor.
              </HeroText>
              <CtaButton
                href="https://chat.whatsapp.com/your-group-invite-link"
                target="_blank"
              >
                Entrar no grupo de discussão no WhatsApp
              </CtaButton>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.875rem",
                  color: "#D1D5DB",
                }}
              >
                O acesso à plataforma principal é exclusivo para membros
                convidados.
              </p>
            </Container>
          </HeroSection>

          <Section bg={theme.colors.bgWhite}>
            <Container>
              <SectionTitle>O Diagnóstico é Claro</SectionTitle>
              <SectionParagraph>
                Estamos presos em um ciclo de promessas vazias e opções
                políticas que não inspiram confiança. A polarização nos cega e a
                corrupção drena nosso futuro. A verdade é dura: se continuarmos
                assim, nada vai mudar.
              </SectionParagraph>
              <Grid>
                <Card>
                  <CardTitle>Falta de Opções Reais</CardTitle>
                  <p style={{ color: theme.colors.textSecondary }}>
                    Sentimos que votamos no "menos pior", não em quem realmente
                    acreditamos que pode transformar o país.
                  </p>
                </Card>
                <Card>
                  <CardTitle>Discussões Vazias</CardTitle>
                  <p style={{ color: theme.colors.textSecondary }}>
                    Brigas e acusações tomam o lugar de debates construtivos
                    sobre os problemas que realmente importam.
                  </p>
                </Card>
                <Card>
                  <CardTitle>Desconexão Total</CardTitle>
                  <p style={{ color: theme.colors.textSecondary }}>
                    Os políticos em Brasília parecem viver em uma realidade
                    diferente da do cidadão comum.
                  </p>
                </Card>
              </Grid>
            </Container>
          </Section>

          <Section>
            <Container>
              <SectionTitle>Nossa Proposta: Inteligência Coletiva</SectionTitle>
              <SectionParagraph>
                Não temos todas as respostas, mas juntos podemos encontrá-las.
                Este fórum é um espaço seguro e moderado para estudar, debater e
                construir um plano de ação para o Brasil, baseado em dados e bom
                senso.
              </SectionParagraph>

              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "2rem",
                }}
              >
                Tópicos em Discussão
              </h4>
              <TopicGrid>
                <TopicCardStyled>
                  <TopicCardTitle>
                    Reforma Tributária e Econômica
                  </TopicCardTitle>
                  <p
                    style={{
                      color: theme.colors.textSecondary,
                      fontSize: "0.875rem",
                    }}
                  >
                    Como simplificar impostos e destravar o crescimento do país?
                  </p>
                </TopicCardStyled>
                <TopicCardStyled>
                  <TopicCardTitle>Educação para o Futuro</TopicCardTitle>
                  <p
                    style={{
                      color: theme.colors.textSecondary,
                      fontSize: "0.875rem",
                    }}
                  >
                    Qual o plano para transformar nossas escolas em centros de
                    excelência?
                  </p>
                </TopicCardStyled>
                <TopicCardStyled>
                  <TopicCardTitle>Segurança Pública e Justiça</TopicCardTitle>
                  <p
                    style={{
                      color: theme.colors.textSecondary,
                      fontSize: "0.875rem",
                    }}
                  >
                    Debates sobre estratégias eficientes para reduzir a
                    criminalidade.
                  </p>
                </TopicCardStyled>
                <TopicCardStyled>
                  <TopicCardTitle>
                    Saúde Acessível e de Qualidade
                  </TopicCardTitle>
                  <p
                    style={{
                      color: theme.colors.textSecondary,
                      fontSize: "0.875rem",
                    }}
                  >
                    Soluções para os desafios do SUS e do sistema de saúde como
                    um todo.
                  </p>
                </TopicCardStyled>
                <TopicCardStyled>
                  <TopicCardTitle>Infraestrutura e Logística</TopicCardTitle>
                  <p
                    style={{
                      color: theme.colors.textSecondary,
                      fontSize: "0.875rem",
                    }}
                  >
                    Propostas para modernizar estradas, portos e a
                    infraestrutura nacional.
                  </p>
                </TopicCardStyled>
                <TopicCardStyled>
                  <TopicCardTitle>
                    Sustentabilidade e Meio Ambiente
                  </TopicCardTitle>
                  <p
                    style={{
                      color: theme.colors.textSecondary,
                      fontSize: "0.875rem",
                    }}
                  >
                    Como conciliar o desenvolvimento econômico com a preservação
                    ambiental?
                  </p>
                </TopicCardStyled>
              </TopicGrid>
            </Container>
          </Section>

          <Section id="junte-se" bg={theme.colors.bgWhite}>
            <Container>
              <SectionTitle>Como Funciona?</SectionTitle>
              <HowItWorksContainer>
                <Step>
                  <StepCircle
                    bgColor={theme.colors.green}
                    color={theme.colors.white}
                  >
                    1
                  </StepCircle>
                  <h4
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Entre no Grupo
                  </h4>
                  <p
                    style={{
                      maxWidth: "20rem",
                      color: theme.colors.textSecondary,
                    }}
                  >
                    Clique no botão e junte-se à nossa comunidade inicial no
                    WhatsApp para começar a interagir.
                  </p>
                </Step>
                <Step>
                  <StepCircle
                    bgColor={theme.colors.yellow}
                    color={theme.colors.blue}
                  >
                    2
                  </StepCircle>
                  <h4
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Participe e Colabore
                  </h4>
                  <p
                    style={{
                      maxWidth: "20rem",
                      color: theme.colors.textSecondary,
                    }}
                  >
                    Participe das discussões, compartilhe suas ideias e ajude a
                    construir um ambiente produtivo.
                  </p>
                </Step>
                <Step>
                  <StepCircle
                    bgColor={theme.colors.blue}
                    color={theme.colors.white}
                  >
                    3
                  </StepCircle>
                  <h4
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Receba seu Convite
                  </h4>
                  <p
                    style={{
                      maxWidth: "20rem",
                      color: theme.colors.textSecondary,
                    }}
                  >
                    Membros engajados serão convidados para a plataforma
                    exclusiva, com mais ferramentas e debates aprofundados.
                  </p>
                </Step>
              </HowItWorksContainer>
            </Container>
          </Section>
        </main>

        <Footer>
          <Container>
            <p>
              &copy; 2025 Fórum Futuro Brasil. Todos os direitos reservados.
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#D1D5DB",
                marginTop: "0.5rem",
              }}
            >
              Uma iniciativa cidadã por um Brasil melhor.
            </p>
          </Container>
        </Footer>
      </Body>
    );
  };

  export default App;
