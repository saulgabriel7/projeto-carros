import React from 'react';
import { 
  CardWrapper, 
  CarImage, 
  CardContent, 
  CarName, 
  CarModel, 
  CarPrice, 
  CarLocation 
} from './Card.styled';
import { carImages } from '../../data/carImages.js';

const Card = ({ car }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <CardWrapper>
      <CarImage src={carImages[car.ImageKey]} alt={`${car.Name} ${car.Model}`} />
      <CardContent>
        <CarName>{car.Name}</CarName>
        <CarModel>{car.Model}</CarModel>
        <CarPrice>{formatPrice(car.Price)}</CarPrice>
        <CarLocation>Localização: {car.Location}</CarLocation>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;