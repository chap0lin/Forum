import styled from "@emotion/styled";
import { theme } from "../pages/Colunistas.style";


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;


export const Input = styled.input`
  width: 95%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.grayLight};
  font-size: 15px;
  outline: none;
  font-family: ${theme.fonts.body};

  &:focus {
    border-color: ${theme.colors.blue};
  }
`;

export const TextArea = styled.textarea`
  width: 95%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.grayLight};
  font-size: 15px;
  outline: none;
  resize: vertical;
  font-family: ${theme.fonts.body};

  &:focus {
    border-color: ${theme.colors.blue};
  }
`;


export const ErrorText = styled.span`
  color: #ef4444;
  font-size: 13px;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 8px;
  padding: 18px;
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  font-family: ${theme.fonts.body};

  &:hover {
    filter: brightness(0.95);
  }
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

