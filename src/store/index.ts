import { createStore } from 'redux';
import { reduceLanguage } from './reducers';
import { SampleStore } from './types';

export const store = createStore<SampleStore>(reduceLanguage, {
    language: 'de-DE'
});

