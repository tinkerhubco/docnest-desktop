// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import Routes from './Routes';
import client from './utils/graphql-client';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { history, store } = this.props;

    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router history={history}>
            <Routes />
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}
