import React from 'react';
import { Container, Image, Data } from './styles';
import camera from '../../assets/cards/camera.png';
import dashboard from '../../assets/cards/dashboard.png';
import bag from '../../assets/cards/bag.png';

interface CardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, alt }) => (
  <Container>
    <Image>
      <img src={camera} alt={alt} width="150" height="150" />
    </Image>

    <Data>
      <h2>{title}</h2>
      <p>{description}</p>
    </Data>
  </Container>
);

export default Card;
