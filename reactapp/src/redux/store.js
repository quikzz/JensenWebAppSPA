import { configureStore } from '@reduxjs/toolkit';
import topicsortsliceReducer from './topicsortslice';

const store = configureStore({
    reducer: {
        topicSort: topicsortsliceReducer,
    },
});

export default store;