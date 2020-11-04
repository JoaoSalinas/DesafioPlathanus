import React from 'react';
import { Container } from './styles';

interface PresentationProps {
  title: string;
  description: string;
  anchor?: string;
}

const Presentation: React.FC<PresentationProps> = ({
  title,
  description,
  anchor,
}) => (
  <Container>
    <h2 id={anchor}>{title}</h2>
    <p>{description}</p>
  </Container>
);

export default Presentation;
