import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #000000;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.9rem;
  color: #000;
`;

export const LogoTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

export const LogoImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

export const LineTop = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const LineBottom = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  padding-right: 2rem;
  margin-top: 1.5rem;
`;

export const TopRow = styled.div`
  display: flex;
  gap: 0.3rem;
  font-weight: bold;
  font-size: 0.95rem;
`;

export const Separator = styled.span`
  color: #007bff;
`;

export const LoginLink = styled.span`
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
`;

export const RegisterLink = styled.span`
  color: #007bff;
  cursor: pointer;
`;

export const Topics = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const TopicLink = styled.span`
  cursor: pointer;
  font-weight: semi-bold;
  color: #000;
  &:hover {
    color: #007bff;
  }
`;
