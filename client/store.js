import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// add redux devtools to track the store
const store = createStore(reducers, composeWithDevTools());

export default store;
