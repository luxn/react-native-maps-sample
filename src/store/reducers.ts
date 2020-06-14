import { SetLanguage, LoadPOIs } from './actions';
import { SampleStore } from './types';
import { SET_LANGUAGE, LOAD_POIS } from './constants';

type ActionTypes = SetLanguage | LoadPOIs;

export function reduce(state: SampleStore, action: ActionTypes): SampleStore {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, language: action.language};
        case LOAD_POIS:
            return { ...state, pois: action.pois};
    }

    return state;
}
