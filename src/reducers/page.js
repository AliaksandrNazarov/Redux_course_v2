import { SET_YEAR } from '../actions/PageActions';
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actions/PageActions';

const initialSate = {
    year: 2018,
    photos: [],
    isFetching: false,
}

export function pageReducer(state = initialSate, action) {
    switch (action.type) {
        case SET_YEAR:
            return {...state, year: action.payload }
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, isFetching: true }
        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, isFetching: false }
        default:
            return state;
    }
}
