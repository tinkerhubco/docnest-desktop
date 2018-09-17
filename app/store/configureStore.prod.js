// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import rootReducer from '../modules';

const history = createHashHistory();

const enhancer = applyMiddleware(thunk);

function configureStore(initialState: any) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
