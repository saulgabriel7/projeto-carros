import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f5f5f5, #e0e0e0);
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: #333;
  margin-bottom: 32px;
  text-align: center;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

export const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const Botao = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  background-color: #ffcc00;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  color: #333;

  &:hover {
    background-color: #e0b800;
    transform: scale(1.05);
  }
`;
