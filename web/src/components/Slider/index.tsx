import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Title } from './styles';

import Button from '../Button';

const Slider: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Art is Eternal Hapiness</Title>
        <Button className="action">
          <Link smooth to="#testimonial">
            Work with Us
          </Link>
        </Button>

        <Button className="scroll">
          <Link smooth to="#what-we-do">
            Scroll down
          </Link>
        </Button>
      </Container>
    </>
  );
};

export default Slider;
