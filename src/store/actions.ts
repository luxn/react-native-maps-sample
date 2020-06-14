import * as constants from './constants';

export interface SetLanguage {
    type: constants.SET_LANGUAGE;
    language: string;
}


export function setLanguage(l: string): SetLanguage {
    return {
        type: constants.SET_LANGUAGE,
        language: l
    };
};

