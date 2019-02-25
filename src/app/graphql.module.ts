import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

const uri = 'http://meslis-test-3.corp.deecoob.com:58192/graphql';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    const err = networkError as any;
    if (err.error.errors[0].extensions.code === 'Login blocked') {
      window.location.replace('coffee');
      localStorage.setItem('block_message', err.error.errors[0].message);
    }
    console.log(`[Network error]: ${JSON.stringify(err)}`);
  }
});

export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({ uri: uri });
  const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    }
  };

  const auth = setContext(_ => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    if (!token) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    }
  });
  return {
    link: errorLink.concat(auth.concat(http)),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
