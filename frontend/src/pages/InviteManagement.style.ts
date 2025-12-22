import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const InviteSection = styled.div`
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
`;

export const InviteLink = styled.code`
  display: block;
  background: #fff;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #007bff;
  word-break: break-all;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;
