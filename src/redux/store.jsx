// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
// import { tasksReducer, filtersReducer } from './reducer';

import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
