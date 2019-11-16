import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório.'),
  email: Yup.string()
    .email('Insira um email válido.')
    .required('Email obrigatório.'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres.')
    .required('Senha obrigatória.'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Digite seu nome completo" />
        <Input
          name="email"
          type="email"
          placeholder="Digite seu melhor email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Digite uma senha segura"
        />

        <button type="submit">Acessar</button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
