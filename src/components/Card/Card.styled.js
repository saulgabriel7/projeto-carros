import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CarName = styled.h3`
  margin: 0 0 8px;
  font-size: 24px;
`;

export const CarModel = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const CarPrice = styled.h4`
  margin: auto 0 8px 0; 
  font-size: 28px;
  color: #27ae60;
`;

export const CarLocation = styled.p`
  margin: 0;
  font-size: 14px;
  color: #95a5a6;
`;