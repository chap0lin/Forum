import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";

const theme = {
  colors: {
    blue: "#3b91cf",
    green: "#009739",
    grayLight: "#f3f4f6",
    grayText: "#6B7280",
    white: "#fff",
    shadow: "rgba(0, 0, 0, 0.1)",
  },
  fonts: {
    body: "'Inter', sans-serif",
  },
};

// ====== LAYOUT GERAL ======
const Body = styled.div`
  font-family: ${theme.fonts.body};
  background-color: ${theme.colors.grayLight};
  min-height: 100vh;
  overflow-x: hidden;
`;

// ====== HERO SECTION ======
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  padding-right: 4rem;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);
  margin: 0;
  overflow: hidden; /* Garante que nada ultrapasse o container */
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  max-width: 600px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 500px;
  margin-bottom: 1.5rem;
`;

const HeroButton = styled.button`
  background-color: ${theme.colors.green};
  border: none;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: #007a2f;
  }
`;

const HeroQuote = styled.p`
  
  bottom: 2rem;
  right: 2rem;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: right;
  white-space: nowrap;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// ====== CONTEÚDO ======
const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

// ====== GRID ======
const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  flex: 3;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

// ====== CARD ======
const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px ${theme.colors.shadow};
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 220px;
  gap: 0.25rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px ${theme.colors.shadow};
  }
`;

const CardImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  border: 3px solid ${theme.colors.white};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  object-fit: cover;
`;

const CardName = styled.h4`
  margin: 0.25rem 0;
  font-size: 1rem;
`;

const CardRole = styled.p`
  color: ${theme.colors.grayText};
  font-size: 0.85rem;
  margin: 0.25rem 0;
`;

const CardBio = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.grayText};
  line-height: 1.3;
  margin: 0.25rem 0;
`;

const CardPosts = styled.p`
  font-weight: bold;
  margin-top: 0.25rem;
  font-size: 0.8rem;
`;

// ====== SIDEBAR ======
const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SidebarSection = styled.div`
  background: ${theme.colors.white};
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 6px ${theme.colors.shadow};
`;

const SidebarTitle = styled.h4`
  margin-bottom: 1rem;
`;

const SidebarItem = styled.div`
  margin-bottom: 1rem;
`;

const SidebarImage = styled.div`
  background-color: ${theme.colors.grayLight};
  width: 100%;
  height: 120px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  background-size: cover;
  background-position: center;
`;

const SidebarText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const SidebarDate = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.grayText};
`;

export default function Colunistas() {
  const dummyColunistas = Array(6).fill({
    name: "Joaquim Silva",
    role: "Distrito Federal",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: 85,
    photo: "https://i.pravatar.cc/150?img=8",
  });

  const dummyNoticias = [
    {
      img: "https://images.unsplash.com/photo-1581091215367-59ab6b9da8f2",
      text: "Notícia sobre o meio ambiente",
      date: "10/10/2025",
    },
    {
      img: "https://images.unsplash.com/photo-1610878180933-1234567890ab",
      text: "Nova lei de proteção ambiental",
      date: "15/10/2025",
    },
  ];

  const dummyArtigos = [
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      text: "A importância da sustentabilidade",
      author: "Maria Souza",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      text: "Cuidando do planeta",
      author: "Carlos Lima",
    },
  ];

  return (
    <Body>
      <Header />

      <HeroSection>
        <HeroTitle>Bem-vindo aos Colunistas</HeroTitle>
        <HeroSubtitle>
          Conheça especialistas que compartilham suas visões sobre o mundo, a
          natureza e o futuro.
        </HeroSubtitle>
        <HeroButton>Registrar</HeroButton>
        <HeroQuote>ACREDITE, DEPENDE DE NÓS!</HeroQuote>
      </HeroSection>

      <Container>
        <Grid>
          {dummyColunistas.map((colunista, idx) => (
            <Card key={idx}>
              <CardImage src={colunista.photo} alt={colunista.name} />
              <CardName>{colunista.name}</CardName>
              <CardRole>{colunista.role}</CardRole>
              <CardBio>{colunista.bio}</CardBio>
              <CardPosts>Número de postagens: {colunista.posts}</CardPosts>
            </Card>
          ))}
        </Grid>

        <Sidebar>
          <SidebarSection>
            <SidebarTitle>Notícias</SidebarTitle>
            {dummyNoticias.map((item, idx) => (
              <SidebarItem key={idx}>
                <SidebarImage
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <SidebarText>{item.text}</SidebarText>
                <SidebarDate>{item.date}</SidebarDate>
              </SidebarItem>
            ))}
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Artigos</SidebarTitle>
            {dummyArtigos.map((item, idx) => (
              <SidebarItem key={idx}>
                <SidebarImage
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <SidebarText>{item.text}</SidebarText>
                <SidebarDate>Autor: {item.author}</SidebarDate>
              </SidebarItem>
            ))}
          </SidebarSection>
        </Sidebar>
      </Container>
    </Body>
  );
}
