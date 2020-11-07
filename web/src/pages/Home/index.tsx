import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Card from '../../components/Card';
import Box from '../../components/Box';
import Contact from '../../components/Contact';
import Presentation from '../../components/Presentation';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Slider />
      <Presentation
        anchor="what-we-do"
        title="What We Do"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />
      <Box>
        <Card
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores. Sequi laudantium officiis fugiat nemo qui ab. Nemo laboriosam qui deleniti nostrum libero accusamus ad nulla, repellendus numquam deserunt ratione."
          image="../../assets/cards/camera.png"
          alt="Camera"
        />

        <Card
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores. Sequi laudantium officiis fugiat nemo qui ab. Nemo laboriosam qui deleniti nostrum libero accusamus ad nulla, repellendus numquam deserunt ratione."
          image="../../assets/cards/camera.png"
          alt="Camera"
        />

        <Card
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores. Sequi laudantium officiis fugiat nemo qui ab. Nemo laboriosam qui deleniti nostrum libero accusamus ad nulla, repellendus numquam deserunt ratione."
          image="../../assets/cards/camera.png"
          alt="Camera"
        />
      </Box>

      <Presentation
        anchor="testimonial"
        title="Testimonial"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />
      <Box>
        <Card
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores. Sequi laudantium officiis fugiat nemo qui ab. Nemo laboriosam qui deleniti nostrum libero accusamus ad nulla, repellendus numquam deserunt ratione."
          image="../../assets/cards/camera.png"
          alt="Camera"
        />

        <Card
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores. Sequi laudantium officiis fugiat nemo qui ab. Nemo laboriosam qui deleniti nostrum libero accusamus ad nulla, repellendus numquam deserunt ratione."
          image="./src/assets/cards/dashboard.png"
          alt="Dashboard"
        />
        <Card
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores. Sequi laudantium officiis fugiat nemo qui ab. Nemo laboriosam qui deleniti nostrum libero accusamus ad nulla, repellendus numquam deserunt ratione."
          image="./assets/cards/bag.png"
          alt="Office Bag"
        />
      </Box>

      <Presentation
        anchor="contact-us"
        title="Quer trocar uma ideia?"
        description="Entre em contato para saber mais sobre nossas soluções. E, não esqueça, tudo pode ser personalizado às necessidades do seu negócio."
      />
      <Contact />
    </>
  );
};

export default Home;
