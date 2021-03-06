import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import counter, { CounterState } from './counter';
import auth, { AuthState, authMiddlewares } from './auth';
import boards, { boardsMiddleware } from './boards';
import user,{ userProfileMiddleware } from './userProfile';
import service, { serviceMiddleware, ServiceState } from './service';
import { initMiddleware } from './initialization';
import connectRouter from './router';
import { History } from 'history';
import lists, { listsMiddleware } from './lists';
import cards, { cardsMiddleware } from './cards';

export interface AppState {
  counter: CounterState;
  auth: AuthState;
  boards?: any;
  user?: any;
  service: ServiceState;
  router?: any;
  lists?: any
  cards?: any
}

// @ts-ignore
const t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers =
  process.env.NODE_ENV !== 'production' && t ? t : compose;

export default function configureStore(history: History) {
  const rootReducer = combineReducers<AppState>({
      router: connectRouter(history),
      counter,
      auth,
      boards,
      user,
      service,
      lists,
      cards
  });

  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(
      ...authMiddlewares, 
      ...boardsMiddleware, 
      ...userProfileMiddleware, 
      ...serviceMiddleware, 
      ...initMiddleware,
      ...listsMiddleware,
      ...cardsMiddleware
      ))
  );
}

export * from './counter'


