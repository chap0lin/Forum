
import Header from "../components/Header";
import {
  Body,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  HeroQuote,
  Container,
  Grid,
  Card,
  CardImage,
  CardName,
  CardRole,
  CardBio,
  CardPosts,
  Sidebar,
  SidebarSection,
  SidebarTitle,
  SidebarItem,
  SidebarImage,
  SidebarText,
  SidebarDate,
} from "./Colunistas.style";

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
