import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: #3b91cf;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 3rem;
  background-color: #3b91cf;
`;

export const LeftSection = styled.div`
  flex: 1;
  color: white;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    max-width: 450px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 400px;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const RegisterBox = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 2rem;
  width: 80%;
  max-width: 450px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: left;
`;

export const RegisterTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.7rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #3b91cf;
  }
`;

export const Select = styled.select`
  flex: 1 ;
  padding: 0.7rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #3b91cf;
  }
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #333;
  margin: 0.5rem 0 1rem;

  a {
    color: #3b91cf;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #009739;
  color: white;
  font-weight: bold;
  padding: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007f2f;
  }
`;
