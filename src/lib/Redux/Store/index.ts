import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import Thunk, { ThunkMiddleware } from 'redux-thunk';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { ExampleState, ExampleActionTypes } from '../Types/example';
import ExampleReducer from '../Reducers/example';
import { LoadingState, LoadingActionTypes } from '../Types/loading';
import LoadingReducer from '../Reducers/loading';

export interface ApplicationState {
  exampleState: ExampleState;
  loadingState: LoadingState;
}

const rootReducer = combineReducers<ApplicationState>({
  exampleState: ExampleReducer,
  loadingState: LoadingReducer,
});

export type AppActions = ExampleActionTypes | LoadingActionTypes;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['loadingState'],
} as PersistConfig<ApplicationState>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore: Store<ApplicationState, AppActions> = createStore(
  persistedReducer,
  applyMiddleware(Thunk as ThunkMiddleware<ApplicationState, AppActions>),
);

export const persistor = persistStore(configureStore);

export default configureStore;
