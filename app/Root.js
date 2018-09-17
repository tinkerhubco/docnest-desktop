// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './Routes';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { history, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
