import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const uri = 'http://meslis-test-3.corp.deecoob.com:58190/graphql';
export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({ uri: uri });

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
    link: auth.concat(http),
    cache: new InMemoryCache()
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