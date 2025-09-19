import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:3000/local/desafio', // ajuste se necessário
  }),
  cache: new InMemoryCache(),
});

export default client;
