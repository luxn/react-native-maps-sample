import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as constants from './constants';
import { AnyAction } from 'redux';
import { LatLng } from 'react-native-maps';

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
    pois: Array<LatLng>
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

                const longitudeSpan = bbox[2] - bbox[0];
                const latitudeSpan = bbox[3] - bbox[1];

                let remotePOIs: Array<LatLng> = [];

                for (let i = 0; i < 5; i++) {
                    const newLon = ((Math.random() * longitudeSpan) + bbox[0]) % 180;
                    const newLat = ((Math.random() * latitudeSpan) + bbox[1]) % 90;                    
                    remotePOIs.push({latitude: newLat, longitude: newLon});
                }

                dispatch({ type: constants.LOAD_POIS, pois: remotePOIs });
                resolve();
            }, 300);
        });


    };
}

