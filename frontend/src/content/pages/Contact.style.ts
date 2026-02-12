import styled from "@emotion/styled";
import { theme } from "./Home.style"; 


export const Body = styled.div`
  background-color: ${theme.colors.bgLight};
  min-height: 100vh;
  padding: 60px 20px;
`;

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
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
`;

