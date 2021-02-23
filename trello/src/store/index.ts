import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import counter, { CounterState } from './counter';
import auth, { AuthState, authMiddlewares } from './auth';
import boards, { boardsMiddlawre } from './boards';
import user,{ userProfileMiddleware } from './userProfile';


export interface AppState {
  counter: CounterState;
  auth: AuthState;
  boards?: any;
  user?: any;
}

// @ts-ignore
const t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers =
  process.env.NODE_ENV !== 'production' && t ? t : compose;

export default function configureStore() {
  const rootReducer = combineReducers<AppState>({
      counter,
      auth,
      boards,
      user,
      
  });

  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...authMiddlewares, ...boardsMiddlawre, ...userProfileMiddleware))
  );
}

export * from './counter'


