import React, { useRef, useCallback } from 'react';
import {
  FiLogIn,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMessageCircle,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Container, Content } from './styles';
import Input from '../Input';
import Button from '../Button';
import getValidationError from '../../utils/getValidationErrors';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ContactFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é de preenchimento obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          message: Yup.string().required(
            'Mensagem é de preenchimento obrigatório',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/dashboard');
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
      <Content>
        <div>
          <p>Email: contato@plathanus.com.br </p>
          <p>Telefone: (48) 3374-8922 </p>
          <p>Endereço: Rua da Praça, 241</p>
          <p>Ed. Pátio da Praça Office Green – Sala 908 Pedra Branca, </p>
          <p>Palhoça SC</p>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiLogIn} placeholder="Nome" />
          <Input name="mail" icon={FiMail} placeholder="Email" />
          <Input name="mail" icon={FiMessageCircle} placeholder="Mensagem" />
          <Button type="submit">Enviar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Contact;
