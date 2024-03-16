import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import config from '@/shared/lib/envConfig';
import { ReactNode } from 'react';

export const apolloClient = new ApolloClient({
  uri: 'http://192.168.3.2:8080/v1/graphql',
  cache: new InMemoryCache(),
});

type Props = {
  children: ReactNode;
};

export function GraphQlProvider({ children }: Props) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
