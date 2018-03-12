/**
 *
 * Created by tareq on 24/11/17.
 */
import { FETCH_WEATHER } from '../actions/index.js';
export default function(state = [], action){

    switch ( action.type ){
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}