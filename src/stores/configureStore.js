import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga"
const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();


  return {
	...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
	runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
