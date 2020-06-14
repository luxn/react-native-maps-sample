import { SetLanguage } from './actions';
import { SampleStore } from './types';
import { SET_LANGUAGE } from './constants';

export function reduceLanguage(state: SampleStore, action: SetLanguage): SampleStore {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, language: action.language};
    }

    return state;
}
