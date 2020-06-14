import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as constants from './constants';
import { AnyAction } from 'redux';

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



export interface LoadPOIs {
    type: constants.LOAD_POIS,
    pois: Array<number>
}

// TODO combine types like AnyAction from redux for relevant types instead of single LoadPOIs type in ThunkAction/ThunkDispatch
export function loadPOIs(bbox: Array<number>): ThunkAction<Promise<void>, {}, {}, LoadPOIs> {
    return async (dispatch: ThunkDispatch<{}, {}, LoadPOIs>): Promise<void> => { // Type Annotation for dispatch is optional in this arrow function
        return new Promise<void>((resolve, reject) => {
            // Mock for remote API

            if (bbox.length != 4) {
                // assuming bbox is 4 element array like [9.966932, 53.560809, 9.983214, 53.547101] (SW to NE)
                reject();
                return;
            }

            setTimeout(() => {

                // create 5 custom points inside bbox

                const width = (bbox[0] + bbox[2]) / 2.0;
                const height = (bbox[1] + bbox[3]) / 2.0;

                let remotePOIs: Array<number> = [];

                for (let i = 0; i < 5; i++) {
                    const newWidth = (Math.random() * width) + bbox[0];
                    const newHeight = (Math.random() * height) + bbox[1];
                    remotePOIs.push(newWidth);
                    remotePOIs.push(newHeight);
                }

                dispatch({ type: constants.LOAD_POIS, pois: remotePOIs });
                resolve();
            }, 1000);
        });


    };
}

