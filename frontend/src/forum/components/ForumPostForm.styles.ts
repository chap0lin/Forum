import styled from '@emotion/styled';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
`;

export const Input = styled.input`
  height: 44px;
  padding: 0 14px;

  border-radius: 10px;
  border: 1px solid #e2e8f0;

  font-size: 14px;

  transition: 0.2s;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

export const CancelButton = styled.button`
  background: #e5e7eb;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  background: #4f46e5;
  color: white;

  border: none;
  padding: 10px 18px;
  border-radius: 10px;

  font-weight: 600;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #4338ca;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
