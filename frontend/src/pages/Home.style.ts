import styled from "@emotion/styled";

export const theme = {
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

export const Body = styled.div`
  background-color: ${theme.colors.bgLight};
  color: ${theme.colors.textPrimary};
  font-family: ${theme.fonts.body};
  margin: 0;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroSection = styled.section`
  color: ${theme.colors.white};
  padding: 5rem 0;
  text-align: center;
  background-color: #002776;
  background-image: linear-gradient(19deg, #002776 0%, #009739 100%);

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const HeroSubtitle = styled.p`
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

export const HeroText = styled.p`
  font-size: 1rem;
  margin-bottom: 3rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const CtaButton = styled.a`
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

export const Section = styled.section<{ bg?: string }>`
  padding: 4rem 0;
  background-color: ${(props) => props.bg || "transparent"};
`;

export const SectionTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${theme.colors.textPrimary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const SectionParagraph = styled.p`
  max-width: 56rem;
  margin: 0 auto 3rem auto;
  color: ${theme.colors.textSecondary};
  text-align: center;
`;

export const Grid = styled.div`
  max-width: 90%;
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background-color: ${theme.colors.bgLight};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.blue};
  margin-bottom: 0.5rem;
`;

export const TopicGrid = styled.div`
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

export const TopicCardStyled = styled.div`
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

export const TopicCardTitle = styled.h5`
  font-weight: bold;
  font-size: 1.125rem;
  color: ${theme.colors.green};
  margin-bottom: 0.5rem;
`;

export const HowItWorksContainer = styled.div`
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

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StepCircle = styled.div<{ color: string; bgColor: string }>`
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

export const Footer = styled.footer`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  padding: 2rem 0;
  text-align: center;
`;
