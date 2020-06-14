import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import { reduceLanguage } from './reducers';
import { SampleStore } from './types';

export const store = createStore<SampleStore>(
    reduceLanguage,
    {
        language: 'de-DE'
    },
    applyMiddleware(reduxThunk)
);
