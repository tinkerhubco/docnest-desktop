import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  // TODO: Inject in a config via environment variables
  uri: 'http://localhost:8080/graphql'
});

export default client;
