import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import { reduce } from './reducers';
import { SampleStore } from './types';

export const store = createStore<SampleStore>(
    reduce,
    {
        language: 'de-DE',
        pois: []
    },
    applyMiddleware(reduxThunk)
);
