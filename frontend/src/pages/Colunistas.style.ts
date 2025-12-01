import styled from "@emotion/styled";

export const theme = {
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

export const Body = styled.div`
  font-family: ${theme.fonts.body};
  background-color: ${theme.colors.grayLight};
  min-height: 100vh;
  overflow-x: hidden;
`;

export const HeroSection = styled.section`
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
  overflow: hidden;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  max-width: 600px;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 500px;
  margin-bottom: 1.5rem;
`;

export const HeroButton = styled.button`
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

export const HeroQuote = styled.p`
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

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  flex: 3;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const Card = styled.div`
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

export const CardImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  border: 3px solid ${theme.colors.white};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  object-fit: cover;
`;

export const CardName = styled.h4`
  margin: 0.25rem 0;
  font-size: 1rem;
`;

export const CardRole = styled.p`
  color: ${theme.colors.grayText};
  font-size: 0.85rem;
  margin: 0.25rem 0;
`;

export const CardBio = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.grayText};
  line-height: 1.3;
  margin: 0.25rem 0;
`;

export const CardPosts = styled.p`
  font-weight: bold;
  margin-top: 0.25rem;
  font-size: 0.8rem;
`;

export const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SidebarSection = styled.div`
  background: ${theme.colors.white};
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 6px ${theme.colors.shadow};
`;

export const SidebarTitle = styled.h4`
  margin-bottom: 1rem;
`;

export const SidebarItem = styled.div`
  margin-bottom: 1rem;
`;

export const SidebarImage = styled.div`
  background-color: ${theme.colors.grayLight};
  width: 100%;
  height: 120px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  background-size: cover;
  background-position: center;
`;

export const SidebarText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

export const SidebarDate = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.grayText};
`;
