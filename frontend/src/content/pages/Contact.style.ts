import styled from "@emotion/styled";
import { theme } from "./Home.style"; 



export const Body = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.bgLight};
  display: flex;
  flex-direction: column;
`;


export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
`;  

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;        
  color: ${theme.colors.textPrimary};
`;


export const Card = styled.div`
  background: ${theme.colors.white};
  padding: 40px;
  border-radius: 14px;
  width: 100%;

  position: relative;
`;

export const WhatsAppFloat = styled.a`
  position: absolute;
  top: 340px;
  right: -200px;

  height: 64px;
  width: 64px;
  border-radius: 50%;

  background-color: ${theme.colors.green};
  color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 28px;
  text-decoration: none;

  box-shadow: 0 8px 20px ${theme.colors.green};

  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.08);
  }
`;


