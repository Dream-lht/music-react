import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//引入reducer
import reducer from './reducer';

//创建store实例
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION___COMPOSE__ || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

export default store;