import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiSearch } from 'react-icons/fi';

import * as Yup from 'yup';
import getValidationError from '../../utils/getValidationErrors';

import Input from '../Input';
import { Container } from './styles';
import Logo from '../../assets/logo.png';

interface SearchProps {
  content: string;
}

const Header: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SearchProps) => {
      try {
        const schema = Yup.object().shape({
          content: Yup.string().required('Informe o que gostaria de pesquisar'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/search');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <nav>
        <Link smooth to="/" className="active">
          Home
        </Link>
        <Link smooth to="/#what-we-do">
          What we do?
        </Link>
        <Link smooth to="/#testimonial">
          Testimonial
        </Link>
        <Link smooth to="/#contact-us">
          Contact Us
        </Link>
      </nav>
      <Link smooth to="/">
        <img src={Logo} alt="Plathanus" />
      </Link>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="search" icon={FiSearch} placeholder="Search..." />
      </Form>
    </Container>
  );
};

export default Header;
