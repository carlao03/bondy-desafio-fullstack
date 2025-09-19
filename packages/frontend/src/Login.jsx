import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      company
      token
    }
  }
`;

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      if (data.login?.token) {
        localStorage.setItem('token', data.login.token);
        onLogin(data.login);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '40px auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={loading} style={{ padding: '8px 0' }}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
      {error && <div style={{ color: 'red' }}>Erro: {error.message}</div>}
    </form>
  );
}
