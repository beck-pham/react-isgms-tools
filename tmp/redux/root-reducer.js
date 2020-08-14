import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from '../redux/directory/directory.reducer';

// define redux persist config
const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
