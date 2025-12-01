import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  font-size: 0.85rem;
  color: #000;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem; /* afastar da parte de baixo */
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-weight: 500;

  a {
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterCopyright = styled.div`
  font-weight: 400;
`;
