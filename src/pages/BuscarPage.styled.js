import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Titulo = styled.h1`
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterContainer = styled.div`
  flex: 0 0 280px; 
`;

export const ResultsContainer = styled.div`
  flex: 1; /* Ocupa o restante do espaço */
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 20px;
`;

export const Mensagem = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 24px auto;
  max-width: 900px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    gap: 16px;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Botao = styled.button`
  border: none;
  background-color: #333;
  padding: 5px;
  border-radius: 5px;
  color: #f5f5f5;
`;
