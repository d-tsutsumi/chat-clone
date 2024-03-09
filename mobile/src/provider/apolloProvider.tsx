import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import config from '@/shared/lib/envConfig';
import { ReactNode } from 'react';

const apolloClient = new ApolloClient({
  uri: config.graphqlEndPoint,
  cache: new InMemoryCache(),
});

type Props = {
  children: ReactNode;
};

export function GraphQlProvider({ children }: Props) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
