import React from "react";
import Header from "../components/Header";
import {
  theme,
  Body,
  Container,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  HeroText,
  CtaButton,
  Section,
  SectionTitle,
  SectionParagraph,
  Grid,
  Card,
  CardTitle,
  TopicGrid,
  TopicCardStyled,
  TopicCardTitle,
  HowItWorksContainer,
  Step,
  StepCircle,
  Footer,
} from "./Home.style";

const App: React.FC = () => {


  return (
    <Body>
      <Header />


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
