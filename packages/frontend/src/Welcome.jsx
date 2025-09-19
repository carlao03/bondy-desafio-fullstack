import React from 'react';

export default function Welcome({ user }) {
  return (
    <div style={{ maxWidth: 320, margin: '40px auto', textAlign: 'center' }}>
      <h1>Bem-vindo(a), {user?.name}!</h1>
      <p>Email: {user?.email}</p>
      <p>Empresa: {user?.company}</p>
    </div>
  );
}
